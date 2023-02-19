import { render, screen } from "@testing-library/react";
import { Add } from "./add";

describe("Given the Add page", () => {
  describe("When it is render", () => {
    test("Then it should return the following text", () => {
      render(<Add></Add>);
      const element = screen.getByText("Add a character");
      expect(element).toBeInTheDocument();
    });
  });
});
