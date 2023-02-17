/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { CharStructure, ProtoCharStructure } from "../../models/character";

export interface CharApiPrivateRepoStructure {
  loadChar(): Promise<CharStructure[]>;
  getChar(id: CharStructure["id"]): Promise<CharStructure>;
  createChar(note: ProtoCharStructure): Promise<CharStructure>;
  updateChar(note: Partial<ProtoCharStructure>): Promise<CharStructure>;
  deleteChar(id: CharStructure["id"]): Promise<void>;
}

export class CharApiPrivateRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:5080/favourites";
  }
  async loadChar(): Promise<CharStructure[]> {
    const response = await fetch(this.url);
    const data = (await response.json()) as CharStructure[];
    return data;
  }

  async getChar(id: CharStructure["id"]): Promise<CharStructure> {
    const url = this.url + "/" + id;
    const response = await fetch(url);
    const data = (await response.json()) as CharStructure;
    return data;
  }

  async createChar(char: ProtoCharStructure): Promise<CharStructure> {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(char),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await response.json()) as CharStructure;
    return data;
  }

  async updateChar(char: Partial<CharStructure>): Promise<CharStructure> {
    const url = this.url + "/" + char.id;
    const response = await fetch(url, {
      method: " PATCH",
      body: JSON.stringify(char),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await response.json()) as CharStructure;
    return data;
  }

  async deleteChar(id: CharStructure["id"]): Promise<void> {
    const url = this.url + "/" + id;
    await fetch(url, {
      method: "DELETE",
    });
  }
}
