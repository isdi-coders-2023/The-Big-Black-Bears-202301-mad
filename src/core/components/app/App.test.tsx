import { render } from "@testing-library/react";
import App from "./App";
import Footer from "../footer/footer";
import { AppRouter } from "../app.router/app.router";
import { Header } from "../header/header";
jest.mock("../app.router/app.router");
jest.mock("../footer/footer");
jest.mock("../header/header");
describe("Given app component", () => {
  describe("When it is rendered", () => {
    test("then should render a text on the screen", () => {
      render(<App />);
      expect(Footer).toHaveBeenCalled();
      expect(AppRouter).toHaveBeenCalled();
      expect(Header).toHaveBeenCalled();
    });
  });
});
