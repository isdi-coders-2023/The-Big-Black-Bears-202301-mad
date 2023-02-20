/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from "@testing-library/react";
import { CharsContext } from "../../context/characters.context";
import { usePublicCharStructure } from "../../hooks/use.public.hook/use.public.hook";
import Details from "./details";
import { MemoryRouter as Router } from "react-router-dom";

const mockContext = {
  charList: [
    { name: "test", id: 1 },
    { name: "test", id: 2 },
  ],
} as unknown as usePublicCharStructure;

describe("Given Details page component", () => {
  describe("When we render the component", () => {
    test('Then, the heading <h2> "Details of " should be in the document', async () => {
      await act(async () =>
        render(
          <CharsContext.Provider value={mockContext}>
            <Router
              initialEntries={["/details/1", "/details/2"]}
              initialIndex={0}
            >
              <Details></Details>
            </Router>
          </CharsContext.Provider>
        )
      );

      const element = screen.getByRole("heading");

      expect(element).toBeInTheDocument();
    });
  });
});
