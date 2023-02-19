import { render, screen } from "@testing-library/react";
import { Buttons } from "./buttons-nav";

describe("Given the buttons component", () => {
  describe("When it is render", () => {
    test("Then it should return the following buttons", () => {
      render(<Buttons></Buttons>);
      const elements = screen.getAllByRole("button");
      let elementCount = 2;
      expect(elements.length).toBe(elementCount);
    });
  });
});
