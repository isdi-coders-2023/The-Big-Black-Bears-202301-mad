type HasId = {
  id: number;
};

export type ProtoCharStructure = {
  name: string;
  imageUrl: string;
  films?: string;
  shortFilms?: string;
  tvShows?: string;
  videoGames?: string;
  isFavorite: boolean;
};

export type CharStructure = HasId & ProtoCharStructure;

export class ProtoChar implements ProtoCharStructure {
  public isFavorite: boolean;
  constructor(
    public name: string,
    public imageUrl: string,
    films: string,
    shortFilms: string,
    tvShows?: string,
    videoGames?: string,
    isFavorite?: boolean
  ) {
    this.isFavorite = false;
  }
}
