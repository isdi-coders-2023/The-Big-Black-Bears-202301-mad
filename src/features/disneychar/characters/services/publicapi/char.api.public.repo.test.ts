import { CharApiPublicRepo } from "./char.api.public.repo";

global.fetch = jest.fn().mockResolvedValue({});

describe("given an new repo", () => {
  let repo: CharApiPublicRepo;
  beforeEach(() => {
    repo = new CharApiPublicRepo();
  });
  describe("when is instanced", () => {
    test("then should load the data from the api", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue([]),
      });
      const resp = await repo.loadChar();
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual([]);
    });
  });
});
