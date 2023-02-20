import { API_URL_CHAR } from "../../../../../config";
import { CharStructure, PublicDatas } from "../../models/character";

const GET_ALL_CHARACTERS = "https://api.disneyapi.dev/characters";

export const loadChar = async (page: number): Promise<CharStructure[]> => {
  const url = GET_ALL_CHARACTERS;
  const resp = await fetch(url);
  const data = (await resp.json()) as PublicDatas;

  if (!data || !data.data) {
    throw new Error("Failed to load characters from API");
  }

  const charactersArray = Object.values(data.data);
  return charactersArray;
};

export const getChar = async (id: number): Promise<any> => {
  const url =
    API_URL_CHAR +
    "?fields=id,name,imageUrl,films,shortFilms,tvShows,videoGames";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Fetch failed");
  }
  const data: CharStructure = await response.json();
  return data;
};
