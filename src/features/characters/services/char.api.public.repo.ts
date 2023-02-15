import { CharStructure, ProtoCharStructure } from "../models/character";

export interface CharApiRepoPublicStructure {
  loadChar(): Promise<CharStructure[]>;
  getChar(id: CharStructure["id"]): Promise<CharStructure>;
  update(note: Partial<ProtoCharStructure>): Promise<CharStructure>;
}

const GET_ALL_CHARACTERS ='https://api.disneyapi.dev/characters';


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

}
