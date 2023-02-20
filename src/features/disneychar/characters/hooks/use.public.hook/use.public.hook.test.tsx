import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharStructure } from "../../models/character";
import { getPublicChar } from "../../public.reducer/char.public.actions.creators";
import { CharApiPublicRepo } from "../../services/publicapi/char.api.public.repo";
import { usePublicChar } from "./use.public.hook";

const mockRepo1 = {
  loadChar: jest.fn(),
  getChar: jest.fn(),
} as unknown as CharApiPublicRepo;

const mockDefault1: CharStructure[] = [
  {
    id: 4,
    name: "pepe",
    imageUrl: "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
    isFavorite: false,
    films: [],
    shortFilms: [],
    tvShows: ["ciao"],
    videoGames: ["halo"],
  },
];

const TestComponent = function () {
  const { loadPublicChar, getPublicChar } = usePublicChar(mockRepo1);

  return (
    <div className="buttoncontainerpublic">
      <button title="loadbuttonpublic" onClick={() => loadPublicChar(1)}>
        load
      </button>
      <button title="getbuttonpublic" onClick={() => getPublicChar(1)}>
        get
      </button>
    </div>
  );
};

describe("Given a testcomponent", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TestComponent />);
  });
  describe("When loadChar function is called", () => {
    test("Then it should render ", () => {
      const element = screen.getByTitle("loadbuttonpublic");
      expect(element).toBeInTheDocument();
    });
  });
  describe("when loadChar is called", () => {
    test("then it should call the load function from api", async () => {
      await fireEvent.click(screen.getByText(/load/i));
      expect(mockRepo1.loadChar).toHaveBeenCalled();
    });
  });
  describe("When getChar function is called", () => {
    test("Then it should render ", () => {
      const element = screen.getByTitle("getbuttonpublic");
      expect(element).toBeInTheDocument();
    });
  });
  describe("when getChar is called", () => {
    test("then it should call the get function from api", async () => {
      await fireEvent.click(screen.getByText(/get/i));
      expect(mockRepo1.getChar).toHaveBeenCalled();
    });
  });
});

// ERROR
describe("Given the usePrivChar Custom Hook and TestError component", () => {
  let spyLog: jest.SpyInstance;
  beforeEach(async () => {
    spyLog = jest.spyOn(global.console, "log");

    const mockRepoError = {
      loadChar: jest.fn().mockRejectedValue(new Error("Test Error")),
      getChar: jest.fn().mockRejectedValue(new Error("Test Error")),
    } as unknown as CharApiPublicRepo;

    const TestError = function () {
      const { loadPublicChar, getPublicChar } = usePublicChar(mockRepoError);
      return (
        <>
          <button title="button1" onClick={() => loadPublicChar(1)}>
            Error
          </button>
          <button title="button2" onClick={() => getPublicChar(2)}>
            Error2
          </button>
        </>
      );
    };
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TestError></TestError>);
  });

  describe("When the TestError is rendered and the button is clicked", () => {
    test("Then, the loadChar function should be catch the error", async () => {
      const element = await screen.findByTitle("button1");
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => userEvent.click(element));
      expect(spyLog).toHaveBeenCalled();
    });
    test("Then, the getChar function should be catch the error", async () => {
      const element = await screen.findByTitle("button2");
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => userEvent.click(element));
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
