import { CharStructure } from "../models/character";
import { loadPublicCharCreator } from "./../public.reducer/char.public.actions.creators";
import { charPublicReducer } from "./char.public.reducer";

const disneyChar: CharStructure[] = [
  {
    id: 1,
    name: "",
    imageUrl: "",
    isFavorite: false,
  },
  {
    id: 2,
    name: "",
    imageUrl: "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
    isFavorite: false,
  },
];

describe("Given a charReducer function", () => {
  describe("When we load an array of characters' objects", () => {
    test("Then it should load this array", () => {
      let result = charPublicReducer([], loadPublicCharCreator(disneyChar));
      expect(result).toEqual(disneyChar);
    });
  });
});

describe("Given the charreducer", () => {
  const mockDefault = [
    {
      id: 4,
      name: "pepe",
      imageUrl:
        "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
      isFavorite: false,
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
