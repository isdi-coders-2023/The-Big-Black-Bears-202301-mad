import { CharacterApiPublicRepo } from "./char.api.public.repo";

global.fetch = jest.fn();

describe("given an new repo", () => {
  let repo: CharacterApiPublicRepo;
  beforeEach(() => {
    repo = new CharacterApiPublicRepo();
  });
  describe("when is instanced", () => {
    test("then should load the data from the api", () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(
          {
            anyName: "pepe"
          }
        ),
      });
      // test("then should get one specific data from the api", () => {
      //   global.fetch = jest.fn().mockResolvedValue({
      //     json: jest.fn().mockResolvedValue([])
      //   });
      // test("then should load the data from the api", () => {
      //   global.fetch = jest.fn().mockResolvedValue({
      //     json: jest.fn().mockResolvedValue([])
      //   });
    });
  });
});
//   });
// });
