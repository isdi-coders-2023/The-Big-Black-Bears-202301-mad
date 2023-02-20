import { act, render, screen } from "@testing-library/react";
import { CharsContext } from "../../context/characters.context";

import Details from "./details";
import { MemoryRouter as Router } from "react-router-dom";
import { usePublicCharStructure } from "../../hooks/use.public.hook/use.public.hook";

const mockContext = {
  characterList: [
    { name: "test", id: 1 },
    { name: "test", id: 2 },
  ],
} as unknown as usePublicCharStructure;

describe("Given Details page component", () => {
  describe("When we render the component", () => {
    test('Then, the heading <h2> "Details" should be in the document', () => {
      // eslint-disable-next-line testing-library/no-unnecessary-act

      render(
        <Router>
          <Details></Details>
        </Router>
      );

      const element = screen.getByText(/Details/);

      expect(element).toBeInTheDocument();
    });
  });
});
