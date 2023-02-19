import { CharStructure } from "../models/character";
import { loadPublicChar } from "./../public.reducer/char.public.actions.creators";
import { charPublicReducer } from "./char.public.reducer";

const disneyChar: CharStructure[] = [
  {
    id: 1,
    name: "",
    imageUrl: "",
    isFavorite: false,
    films: ["pepito"],
    shortFilms: ["test"],
    tvShows: ["ciao"],
    videoGames: ["halo"],
  },
  {
    id: 2,
    name: "",
    imageUrl: "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
    isFavorite: false,
    films: ["pepito"],
    shortFilms: ["test"],
    tvShows: ["ciao"],
    videoGames: ["halo"],
  },
];

describe("Given a charReducer function", () => {
  describe("When we load an array of characters' objects", () => {
    test("Then it should load this array", () => {
      let result = charPublicReducer([], loadPublicChar(disneyChar));
      expect(result).toEqual(disneyChar);
    });
  });
});

describe("Given the charreducer", () => {
  const mockDefault: CharStructure[] = [
    {
      id: 4,
      name: "pepe",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
      isFavorite: false,
      films: [],
      shortFilms: [],
      tvShows: ["ciao"],
      videoGames: ["halo"],
    },
  ];
  const defaultAction = {
    type: "",
    payload: [],
  };
  test("When the reducer receives default action, then the new state shouldn't change", () => {
    const defaultState = charPublicReducer(mockDefault, defaultAction);
    expect(defaultState).toEqual(mockDefault);
  });
});
