import { render, screen } from "@testing-library/react";
import Characters from "./characters";

describe("Given the characters page", () => {
  describe("When it is render", () => {
    test("Then it should return the following images", () => {
      render(<Characters></Characters>);
      const elements = screen.getAllByRole("img");
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
