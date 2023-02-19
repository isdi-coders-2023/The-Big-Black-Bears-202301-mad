import { CharApiPublicRepo } from "./char.api.public.repo";

describe("given a new repo", () => {
  let repo: CharApiPublicRepo;
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({});
    repo = new CharApiPublicRepo();
  });
  describe("when it is instanced", () => {
    test("then it should load the data from the API", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({ data: {} }),
      });
      const resp = await repo.loadChar(1);
      expect(fetch).toHaveBeenCalled();
      expect(resp).toEqual([]);
    });

    test("then it should throw an error with a descriptive message", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue(null),
      });
      await expect(repo.loadChar(1)).rejects.toThrow(
        "Failed to load characters from API"
      );
    });
  });
});
