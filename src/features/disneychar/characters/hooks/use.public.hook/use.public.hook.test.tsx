import { fireEvent, render, screen } from "@testing-library/react";
import { CharacterApiPublicRepo } from "../../services/publicapi/char.api.public.repo";
import { usePublicChar } from "./use.public.hook";

const mockRepo1 = {
  loadChar: jest.fn(),
} as unknown as CharacterApiPublicRepo;

const TestComponent = function () {
  const { char, loadPublicChar } = usePublicChar(mockRepo1);

  return (
    <div className="buttoncontainerpublic">
      <button title="loadbuttonpublic" onClick={() => loadPublicChar()}>
        load
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
});
