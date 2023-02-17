import { render, screen } from "@testing-library/react";
import { Edit } from "./edit";

describe("Given the edit page", () => {
  describe("When it is render", () => {
    test("Then it should return the following text", () => {
      render(<Edit></Edit>);
      const element = screen.getByText("Edit a character");
      expect(element).toBeInTheDocument();
    });
  });
});
