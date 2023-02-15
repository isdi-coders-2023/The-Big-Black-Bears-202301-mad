type HasId = {
  id: number;
};

export type ProtoCharStructure = {
  name: string;
  imageUrl: string;
  films?: [];
  shortFilms?: [];
  tvShows?: [];
  videoGames?: [];
  isFavorite: boolean;
};

export type CharStructure = HasId & ProtoCharStructure;

export interface ProtoChar extends CharStructure {
  isFavorite: boolean;
  name: string;
  imageUrl: string;
  films: [];
  shortFilms: [];
  tvShows: [];
  videoGames: [];
}
