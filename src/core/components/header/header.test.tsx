import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then it should have the title in the screen", () => {
      render(<Header />);
      const element = screen.getAllByRole("img");
      const elementCount = 2;
      expect(element.length).toBe(elementCount);
    });
  });
});
