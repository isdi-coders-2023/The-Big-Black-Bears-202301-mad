import { CharStructure } from "../../models/character";
import { CharApiPrivateRepo } from "../../services/privateapi/char.api.private.repo";
import { usePrivChar } from "./use.priv.char";
import { fireEvent, render, screen } from "@testing-library/react";

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
  films: [],
};

const mockChar1: CharStructure = {
  id: 1,
  name: "test",
  imageUrl: "pepe",
  isFavorite: true,
  films: [],
};

const TestComponent = function () {
  const { char, loadChar, addChar, deleteChar, updateChar } =
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
      <button
        title="updatebutton"
        onClick={() => updateChar(mockChar)}
      >update</button>
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
