import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharApiPublicRepo } from "../../services/publicapi/char.api.public.repo";
import { usePublicChar } from "./use.public.hook";

const mockRepo1 = {
  loadChar: jest.fn(),
} as unknown as CharApiPublicRepo;

const TestComponent = function () {
  const { loadPublicChar } = usePublicChar(mockRepo1);

  return (
    <div className="buttoncontainerpublic">
      <button title="loadbuttonpublic" onClick={() => loadPublicChar(1)}>
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

// ERROR
describe("Given the usePrivChar Custom Hook and TestError component", () => {
  let spyLog: jest.SpyInstance;
  beforeEach(async () => {
    spyLog = jest.spyOn(global.console, "log");

    const mockRepoError = {
      loadChar: jest.fn().mockRejectedValue(new Error("Test Error")),

    } as unknown as CharApiPublicRepo;

    const TestError = function () {
      const { loadPublicChar } =
        usePublicChar(mockRepoError);
      return (
        <>
          <button title="button1" onClick={() => loadPublicChar(1)}>
            Error
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
  });
});
