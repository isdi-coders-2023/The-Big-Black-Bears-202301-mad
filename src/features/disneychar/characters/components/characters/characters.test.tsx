/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/prefer-screen-queries */
import { act, fireEvent, render, screen } from "@testing-library/react";
import Characters from "./characters";
import { MemoryRouter as Router } from "react-router-dom";
import { CharsContext } from "../../context/characters.context";

import { CharStructure, ProtoCharStructure } from "../../models/character";

import React from "react";
import { Card } from "../card/card";

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
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
    },
    {
      id: 2,
      name: "Donald Duck",
      image: "https://example.com/donald-duck.jpg",
      description: "Another beloved Disney character",
      category: "TV Shows",
      isFavorite: false,
      films: [],
      shortFilms: [],
      tvShows: [],
      videoGames: [],
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
        <Characters></Characters>
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
          <Characters></Characters>
        </CharsContext.Provider>
      );

      const listElement = await screen.findAllByRole("list", { name: "" });
      expect(listElement).toHaveLength(2);
    });
  });
  describe("When we click a button to navigate to a previous page", () => {
    test("Then the button should be in the document", () => {
      const elements = screen.getAllByRole("button");
      fireEvent.click(elements[0]);
    });
  });
  describe("When we render a card", () => {
    test("Then it should appear in the document", async () => {
      act(() => {
        render(
          <Router>
            <Card
              key={mockRemote.char[0].id}
              character={mockRemote.char[0]}
            ></Card>
          </Router>
        );
      });
      const name = await screen.findByRole("heading", { name: "Mickey Mouse" });
      expect(name).toBeInTheDocument();
    });
  });
});
