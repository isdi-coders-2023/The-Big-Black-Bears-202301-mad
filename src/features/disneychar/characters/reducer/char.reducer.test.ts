import { charReducer } from "./char.reducer";
import { CharStructure } from "../models/character";
import {
  loadCharCreator,
  createCharCreator,
  updateCharCreator,
  deleteCharCreator,
} from "./char.actions.creators";

const disneyChar: CharStructure[] = [
  {
    id: 1,
    name: "",
    imageUrl: "",
    isFavorite: false,
    films: [],
    shortFilms: [],
    tvShows: ["ciao"],
    videoGames: ["halo"],
  },
  {
    id: 2,
    name: "",
    imageUrl: "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
    isFavorite: false,
    films: [],
    shortFilms: [],
    tvShows: ["ciao"],
    videoGames: ["halo"],
  },
];

describe("Given a charReducer function", () => {
  describe("When we load an array of characters' objects", () => {
    test("Then it should load this array", () => {
      let result = charReducer([], loadCharCreator(disneyChar));
      expect(result).toEqual(disneyChar);
    });
  });
  describe("When we create a character's object", () => {
    const mockCharCreate: {} = [
      {
        id: 1,
        name: "",
        imageUrl:
          "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
        isFavorite: false,
        films: [],
        shortFilms: [],
        tvShows: ["ciao"],
        videoGames: ["halo"],
      },
    ];
    test("Then it should create this array", () => {
      let result2 = charReducer(
        [],
        createCharCreator({
          id: 1,
          name: "",
          imageUrl:
            "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
          isFavorite: false,
          films: [],
          shortFilms: [],
          tvShows: ["ciao"],
          videoGames: ["halo"],
        })
      );
      expect(result2).toEqual(mockCharCreate);
    });
  });
  describe("When we update a character's object", () => {
    const mockCharUpdate = [
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
    const mockCharUpdate2 = [
      {
        id: 3,
        name: "pepe",
        imageUrl:
          "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
        isFavorite: false,
        films: [],
        shortFilms: [],
        tvShows: [],
        videoGames: [],
      },
    ];
    test("Then it should update this array", () => {
      let result3 = charReducer(
        [
          {
            id: 3,
            name: "",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
            isFavorite: false,
            films: [],
            shortFilms: [],
            tvShows: [],
            videoGames: [],
          },
        ],
        updateCharCreator({
          id: 3,
          name: "pepe",
          imageUrl:
            "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
          isFavorite: false,
          films: [],
          shortFilms: [],
          tvShows: [],
          videoGames: [],
        })
      );
      expect(result3).toEqual(mockCharUpdate2);
    });
    test("Then it shouldn't update this array", () => {
      let result4 = charReducer(
        [
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
        ],
        updateCharCreator({
          id: 3,
          name: "",
          imageUrl:
            "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
          isFavorite: false,
          films: [],
          shortFilms: ["ce"],
          tvShows: ["cu"],
          videoGames: [],
        })
      );
      expect(result4).toEqual(mockCharUpdate);
    });
  });
  describe("When we delete a character's object", () => {
    const mockCharDelete: CharStructure[] = [
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
    test("Then it should delete this array", () => {
      let result5 = charReducer(mockCharDelete, deleteCharCreator(4));
      expect(result5).toEqual([]);
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
      payload: 3,
    };
    test("When the reducer receives default action, then the new state shouldn't change", () => {
      const defaultState = charReducer(mockDefault, defaultAction);
      expect(defaultState).toEqual(mockDefault);
    });
  });
});
