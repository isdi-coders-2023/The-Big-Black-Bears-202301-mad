type HasId = {
  id: number;
};

export type ProtoCharStructure = {
  name: string;
  imageUrl?: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  isFavorite: boolean;
  page?: number;
  filterCategory?: string;
  category?: string;
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
  page: number;
}

export type PublicDatas = {
  count: string;
  data: [CharStructure];
  nextPage: string;
  totalPages: number;
};
