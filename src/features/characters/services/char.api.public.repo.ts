import { CharStructure, ProtoCharStructure } from "../models/character";

export interface CharApiRepoPublicStructure {
  loadChar(): Promise<CharStructure[]>;
  getChar(id: CharStructure["id"]): Promise<CharStructure>;
  update(note: Partial<ProtoCharStructure>): Promise<CharStructure>;
}

const FILTER_CHARACTERS = 'https://api.disneyapi.dev/character?queryParams';
const GET_ALL_CHARACTERS ='https://api.disneyapi.dev/characters';
const GET_ONE_CHARACTER = 'https://api.disneyapi.dev/characters/:id';

export class CharacterApiPublicRepo {
  url: string;
  constructor() {
    this.url = GET_ALL_CHARACTERS;
  }

  async loadChar(): Promise<CharStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as CharStructure[];
    return data;
  }

  async getChar(id: CharStructure["id"]): Promise<CharStructure> {
    const url = GET_ALL_CHARACTERS + "/" + id;
    const resp = await fetch(url);
    const data = (await resp.json()) as CharStructure;
    return data;
  }

  async update(note: Partial<CharStructure>): Promise<CharStructure> {
    const url = GET_ALL_CHARACTERS + "/" + note.id;
    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await resp.json()) as CharStructure;
    return data;
  }
}
