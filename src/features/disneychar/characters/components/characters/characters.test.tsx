import { render, screen } from "@testing-library/react";
import Characters from "./characters";
import { MemoryRouter as Router } from "react-router-dom";
import { Buttons } from "../buttons-nav/buttons-nav";
import { CharsContext } from "../../context/characters.context";
import { CharsContextProvider } from "../../context/characters.context.provider";
import { ContextType } from "react";
import { CharStructure, ProtoCharStructure } from "../../models/character";

const mockRemote = {
  char: [
    {
      id: 1,
      name: "Mickey Mouse",
      image: "/mickey-mouse.png",
      imageUrl: "https://example.com/mickey-mouse.png",
      description: "A famous cartoon character",
      category: "Films",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Donald Duck",
      image: "https://example.com/donald-duck.jpg",
      description: "Another beloved Disney character",
      category: "TV Shows",
      isFavorite: false,
    },
  ],
  loadPublicChar: jest.fn(),
};

const value: any = {
  remote: {
    char: [],
    loadPublicChar: jest.fn(),
  },
  private: {
    char: [],
    loadChar: async () => {},
    addChar: async (character: ProtoCharStructure) => {},
    deleteChar: async (id: number) => {},
    updateCharts: async (character: CharStructure) => {},
    favoriteChars: [],
    setFavoriteChars: jest.fn(),
  },
};

describe("Given the characters page", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Router>
        <Characters>
          <Buttons></Buttons>
        </Characters>
      </Router>
    );
  });

  describe("When it is rendered", () => {
    test("Then it should display the 'Our characters' heading", async () => {
      const headingElement = await screen.findByText(/Our characters/i);
      expect(headingElement).toBeInTheDocument();
    });

    test("Then it should display a list of characters", async () => {
  render(
    <CharsContext.Provider value={value}>
      <Characters><Buttons></Buttons></Characters>
    </CharsContext.Provider>
  );

  const listElement = await screen.findAllByRole("list", { name: "" });
  expect(listElement).toHaveLength(2);
});
  });
});
