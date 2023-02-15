import { render, screen } from "@testing-library/react";
import { CharStructure } from "../../models/character";
import { Card } from "./card";

const mockChar: CharStructure = {
  name: "string",
  imageUrl: "string",
} as unknown as CharStructure;

describe("Given a Card component", () => {
  describe("when it is rendered", () => {
    render(<Card character={mockChar}></Card>);
    test("Then the character's name should be in the document", () => {
      const element1 = screen.getByText(mockChar.name);
      expect(element1).toBeInTheDocument();
    });
  });
});
