import { render } from "@testing-library/react";
import HomePage from "./home";

jest.mock("./home");
describe("Given home component", () => {
  describe("When it is render", () => {
    test('Then it should render "Home Page"', () => {
      render(
        <>
          <HomePage></HomePage>
        </>
      );
      expect(HomePage).toHaveBeenCalled();
    });
  });
});
