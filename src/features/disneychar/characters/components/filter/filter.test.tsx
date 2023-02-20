import { render, fireEvent, screen } from "@testing-library/react";
import { Filter } from "./filter";

describe("Filter component", () => {
  const characters = [
    {
      id: 1,
      name: "Character 1",
      films: [],
      tvShows: [],
      videoGames: [],
      shortFilms: [],
      isFavorite: false,
    },
    {
      id: 2,
      name: "Character 2",
      films: ["1"],
      tvShows: [],
      videoGames: [],
      shortFilms: [],
      isFavorite: false,
    },
    {
      id: 3,
      name: "Character 3",
      films: [],
      tvShows: ["1", "2"],
      videoGames: [],
      shortFilms: [],
      isFavorite: false,
    },
    {
      id: 4,
      name: "Character 4",
      films: [],
      tvShows: [],
      videoGames: ["1", "2", "3"],
      shortFilms: [],
      isFavorite: false,
    },
    {
      id: 5,
      name: "Character 5",
      films: [],
      tvShows: [],
      videoGames: [],
      shortFilms: ["1", "2", "3", "4"],
      isFavorite: false,
    },
  ];
  const setDisplayedCharacters = jest.fn();

  it("should display a select element with options for different categories", () => {
    render(
      <Filter
        characters={characters}
        setDisplayedCharacters={setDisplayedCharacters}
      />
    );
    const selectElement = screen.getByLabelText("Category");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveTextContent("All");
    expect(selectElement).toHaveTextContent("Films");
    expect(selectElement).toHaveTextContent("TV Shows");
    expect(selectElement).toHaveTextContent("Video Games");
    expect(selectElement).toHaveTextContent("Short Films");
  });

  it("should filter characters based on the selected category", () => {
    const { getByLabelText } = render(
      <Filter
        characters={characters}
        setDisplayedCharacters={setDisplayedCharacters}
      />
    );
    const selectElement = screen.getByLabelText("Category");
    fireEvent.change(selectElement, { target: { value: "films" } });
    expect(setDisplayedCharacters).toHaveBeenCalledWith([characters[1]]);
    fireEvent.change(selectElement, { target: { value: "tvShows" } });
    expect(setDisplayedCharacters).toHaveBeenCalledWith([characters[2]]);
    fireEvent.change(selectElement, { target: { value: "videoGames" } });
    expect(setDisplayedCharacters).toHaveBeenCalledWith([characters[3]]);
    fireEvent.change(selectElement, { target: { value: "shortFilms" } });
    expect(setDisplayedCharacters).toHaveBeenCalledWith([characters[4]]);
    fireEvent.change(selectElement, { target: { value: "All" } });
    expect(setDisplayedCharacters).toHaveBeenCalledWith(characters);
  });
});
