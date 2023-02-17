import { render, screen } from "@testing-library/react";
import Characters from "./characters";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given the characters page", () => {
  describe("When it is render", () => {
    test("Then it should return the following text", () => {
      render(
        <Router>
          <Characters></Characters>
        </Router>
      );
      const element = screen.getByText("Our characters");
      expect(element).toBeInTheDocument();
    });
  });
});
