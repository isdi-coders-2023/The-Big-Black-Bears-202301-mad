import { render, screen } from "@testing-library/react";
import ErrorPage from "./error";

describe("Given ErrorPage component", () => {
  describe("When it is render", () => {
    test("Then it should have the Error 404 in the screen", () => {
      render(<ErrorPage />);
      const element = screen.getAllByText(/Error 404:/i);
      const elementCount = 2;
      expect(element.length).toBe(elementCount);
    });
  });
});
