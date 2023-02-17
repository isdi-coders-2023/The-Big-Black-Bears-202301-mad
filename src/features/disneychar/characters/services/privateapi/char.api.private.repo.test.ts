import { CharStructure } from "../../models/character";
import { CharApiPrivateRepo } from "./char.api.private.repo";

global.fetch = jest.fn().mockResolvedValue({});

const mockChar: CharStructure = {
  id: 1,
  name: "test",
  imageUrl: "pepe",
  isFavorite: false,
  films: [""],
};

const mockChar1: CharStructure = {
  id: 1,
  name: "test",
  imageUrl: "pepe",
  isFavorite: true,
  films: [""],
};

describe("Given a new private repo", () => {
  let repo1: CharApiPrivateRepo;
  beforeEach(() => {
    repo1 = new CharApiPrivateRepo();
  });
  describe("When is instanced", () => {
    test("then it should load the data from the api", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });
      const resp = await repo1.loadChar();
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual([]);
    });
    test("then it should get and specified card", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockChar),
      });
      const resp = await repo1.getChar(1);
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual(mockChar);
    });
    test("then it create a card", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          id: 1,
          name: "test",
          imageUrl: "pepe",
          isFavorite: false,
          films: [""],
        }),
      });
      const resp = await repo1.createChar({
        name: "test",
        imageUrl: "pepe",
        isFavorite: false,
        films: [""],
      });
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual(mockChar);
    });
    test("then it should modify the card", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          id: 1,
          name: "test",
          imageUrl: "pepe",
          isFavorite: true,
          films: [""],
        }),
      });
      const resp = await repo1.updateChar({
        name: "test",
        imageUrl: "pepe",
        isFavorite: true,
        films: [""],
      });
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual(mockChar1);
    });
    test("then it should delete my card", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          id: 1,
          name: "test",
          imageUrl: "pepe",
          isFavorite: true,
          films: [""],
        }),
      });
      const resp = await repo1.deleteChar(1);
      expect(fetch).toHaveBeenCalled();
      expect(resp).toBe(void 0);
    });
  });
});
