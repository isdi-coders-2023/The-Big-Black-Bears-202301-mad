type HasId = {
  id: number;
};

export type ProtoCharStructure = {
  name: string;
  imageUrl: string;
  films?: [string];
  shortFilms?: [string];
  tvShows?: [string];
  videoGames?: [string];
  isFavorite: boolean;
};

export type CharStructure = HasId & ProtoCharStructure;

export interface ProtoChar extends CharStructure {
  isFavorite: boolean;
  name: string;
  imageUrl: string;
  films: [string];
  shortFilms: [string];
  tvShows: [string];
  videoGames: [string];
}
