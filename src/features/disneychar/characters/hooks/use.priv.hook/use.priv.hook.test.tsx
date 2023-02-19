/* eslint-disable testing-library/no-unnecessary-act */
import { CharStructure } from "../../models/character";
import { CharApiPrivateRepo } from "../../services/privateapi/char.api.private.repo";
import { usePrivChar } from "./use.priv.char";
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockRepo = {
  updateChar: jest.fn(),
  deleteChar: jest.fn(),
  createChar: jest.fn(),
  loadChar: jest.fn(),
} as unknown as CharApiPrivateRepo;

const mockChar: CharStructure = {
  id: 1,
  name: "test",
  imageUrl: "pepe",
  isFavorite: false,
  films: ["pepito"],
  shortFilms: ["test"],
  tvShows: ["ciao"],
  videoGames: ["halo"],
};

describe("Given a testcomponent", () => {
  beforeEach(() => {
    const TestComponent = function () {
      const { loadChar, addChar, deleteChar, updateChar } =
        usePrivChar(mockRepo);

      return (
        <div className="buttoncontainer">
          <button title="loadbutton" onClick={() => loadChar()}>
            load
          </button>
          <button title="addbutton" onClick={() => addChar(mockChar)}>
            add
          </button>
          <button title="deletebutton" onClick={() => deleteChar(1)}>
            del
          </button>
          <button title="updatebutton" onClick={() => updateChar(mockChar)}>
            update
          </button>
        </div>
      );
    };
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TestComponent />);
  });
  describe("When loadChar function is called", () => {
    test("Then it should render ", () => {
      const element = screen.getByTitle("loadbutton");
      expect(element).toBeInTheDocument();
    });
  });
  describe("when loadChar is called", () => {
    test("then it should call the load function from api", async () => {
      await fireEvent.click(screen.getByText(/load/i));
      expect(mockRepo.loadChar).toHaveBeenCalled();
    });
  });
  describe("when addChar is called", () => {
    test("then it should create a new char", async () => {
      await fireEvent.click(screen.getByText(/add/i));
      expect(mockRepo.createChar).toHaveBeenCalled();
    });
  });
  describe("when delChar is called", () => {
    test("then it should render a list of char", async () => {
      await fireEvent.click(screen.getByText(/del/i));
      expect(mockRepo.deleteChar).toHaveBeenCalled();
    });
  });
  describe("when updateChar is called", () => {
    test("then it should render a list of char", async () => {
      await fireEvent.click(screen.getByText(/update/i));
      expect(mockRepo.updateChar).toHaveBeenCalled();
    });
  });
});

//ERRORES

describe("Given the usePrivChar Custom Hook and TestError component", () => {
  let spyLog: jest.SpyInstance;
  beforeEach(async () => {
    spyLog = jest.spyOn(global.console, "log");

    const mockRepoError = {
      loadChar: jest.fn().mockRejectedValue(new Error("Test Error")),
      addChar: jest.fn().mockRejectedValue(new Error("Test Error")),
      deleteChar: jest.fn().mockRejectedValue(new Error("Test Error")),
      updateChar: jest.fn().mockRejectedValue(new Error("Test Error")),
    } as unknown as CharApiPrivateRepo;

    const TestError = function () {
      const { loadChar, addChar, deleteChar, updateChar } =
        usePrivChar(mockRepoError);
      return (
        <>
          <button title="buttonload" onClick={() => loadChar()}>
            Error
          </button>
          <button title="buttonadd" onClick={() => addChar(mockChar)}>
            Error
          </button>
          <button title="buttondelete" onClick={() => deleteChar(1)}>
            Error
          </button>
          <button title="buttonupdate" onClick={() => updateChar(mockChar)}>
            Error
          </button>
        </>
      );
    };
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TestError></TestError>);
  });

  describe("When the TestError is rendered and the button is clicked", () => {
    test("Then, loadChar must catch an error and give you a warn", async () => {
      const element1 = await screen.findByTitle("buttonload");
      await act(async () => userEvent.click(element1));
      expect(spyLog).toHaveBeenCalled();
    });
    test("Then, the addChar function should be catch the error", async () => {
      const element2 = await screen.findByTitle("buttonadd");
      await act(async () => userEvent.click(element2));
      expect(spyLog).toHaveBeenCalled();
    });
    test("Then, deleteChar must catch the error and give you a warning", async () => {
      const element3 = await screen.findByTitle("buttondelete");
      await act(async () => userEvent.click(element3));
      expect(spyLog).toHaveBeenCalled();
    });
    test("Then, the updateChar function should be catch the error", async () => {
      const element4 = await screen.findByTitle("buttonupdate");
      await act(async () => userEvent.click(element4));
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
