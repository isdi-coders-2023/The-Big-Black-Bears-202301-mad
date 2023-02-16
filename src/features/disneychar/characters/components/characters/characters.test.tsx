import { render, screen } from "@testing-library/react";
import Characters from "./characters";

describe("Given the characters page", () => {
  describe("When it is render", () => {
    test("Then it should return the following text", () => {
      render(<Characters></Characters>);
      const element = screen.getByText("Our characters");
      expect(element).toBeInTheDocument();
    });
  });
});
