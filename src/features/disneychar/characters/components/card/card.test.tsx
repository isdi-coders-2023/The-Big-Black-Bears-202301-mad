import { render, screen } from "@testing-library/react";
import { CharStructure } from "../../models/character";
import { Card } from "./card";
import { MemoryRouter as Router } from "react-router-dom";

const mockChar: CharStructure = {
  name: "string",
  imageUrl: "string",
} as unknown as CharStructure;

describe("Given a Card component", () => {
  describe("when it is rendered", () => {
    render(
      <Router>
        <Card character={mockChar}></Card>
      </Router>
    );
    test("Then the character's name should be in the document", () => {
      const element1 = screen.getByText(mockChar.name);
      expect(element1).toBeInTheDocument();
    });
  });
});
