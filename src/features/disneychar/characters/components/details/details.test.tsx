import { render, screen } from "@testing-library/react";
import { CharStructure } from "../../models/character";
import Details from "./details";
import { MemoryRouter as Router } from "react-router-dom";

const mockCharacters: CharStructure = {
  id: 1,
  name: "Test Character",
  imageUrl: "https://static.wikia.nocookie.net/disney/images/2/20/ABE.jpg",
  isFavorite: false,
  films: ["Los goonies"],
  shortFilms: ["El circo de las mariposas"],
  tvShows: ["SouthPark"],
  videoGames: ["Game"],
};

describe("Given Details function", () => {
  describe("When details function is rendered", () => {
    test("Then it should render the image in the card", () => {
      render(
        <Router>
          <Details character={mockCharacters} />
        </Router>
      );
      const imageDetails = screen.getByAltText("Details card image");
      expect(imageDetails).toBeInTheDocument();
    });

    test("Then it should render the name  in the card", () => {
      render(
        <Router>
          <Details character={mockCharacters} />
        </Router>
      );
      const nameDetails = screen.getByText(mockCharacters.name);
      expect(nameDetails).toBeInTheDocument();
    });
    test("Then it should render the films  in the card", () => {
      render(
        <Router>
          <Details character={mockCharacters} />
        </Router>
      );
      const nameDetails = mockCharacters.films;
      expect(nameDetails).toContain("Los goonies");
    });
    test("Then it should render the Short Films  in the card", () => {
      render(
        <Router>
          <Details character={mockCharacters} />
        </Router>
      );
      const nameDetails = mockCharacters.shortFilms;
      expect(nameDetails).toContain("El circo de las mariposas");
    });
    test("Then it should render the TV Shows  in the card", () => {
      render(
        <Router>
          <Details character={mockCharacters} />
        </Router>
      );
      const nameDetails = mockCharacters.tvShows;
      expect(nameDetails).toContain("SouthPark");
    });
    test("Then it should render the Games  in the card", () => {
      render(
        <Router>
          <Details character={mockCharacters} />
        </Router>
      );
      const nameDetails = mockCharacters.videoGames;
      expect(nameDetails).toContain("Game");
    });
  });
});
