import { CharStructure, PublicDatas } from "../../models/character";

export interface CharApiRepoPublicStructure {
  loadChar(page: number): Promise<CharStructure[]>;
}

const GET_ALL_CHARACTERS = "https://api.disneyapi.dev/characters";

export class CharApiPublicRepo {
  url: string;
  constructor() {
    this.url = GET_ALL_CHARACTERS;
  }

  // async loadChar(): Promise<CharStructure[]> {
  //   const resp = await fetch(this.url);
  //   const data = (await resp.json()) as PublicDatas;
  //   const charactersArray = Object.values(data.data);
  //   const finalArray = await charactersArray;
  //   return finalArray;
  // }

  async loadChar(page: number): Promise<CharStructure[]> {
    const resp = await fetch(`${this.url}?page=${page}`);
    const data = (await resp.json()) as PublicDatas;

    if (!data || !data.data) {
      throw new Error("Failed to load characters from API");
    }

    const charactersArray = Object.values(data.data);
    return charactersArray;
  }
}
