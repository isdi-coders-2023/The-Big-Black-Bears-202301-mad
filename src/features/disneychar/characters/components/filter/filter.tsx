import { CharStructure } from "../../models/character";
import { useState } from "react";

type FilterProps = {
  characters: CharStructure[];
  setDisplayedCharacters: (characters: CharStructure[]) => void;
};

export function Filter({ characters, setDisplayedCharacters }: FilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);

    let filteredCharacters: CharStructure[] = [];

    switch (category) {
      case "films":
        filteredCharacters = characters.filter((char) => char.films.length > 0);
        break;
      case "tvShows":
        filteredCharacters = characters.filter(
          (char) => char.tvShows.length > 0
        );
        break;
      case "videoGames":
        filteredCharacters = characters.filter(
          (char) => char.videoGames.length > 0
        );
        break;
      case "shortFilms":
        filteredCharacters = characters.filter(
          (char) => char.shortFilms.length > 0
        );
        break;
      default:
        // If "All" or an invalid category is selected, show all characters
        filteredCharacters = characters;
        break;
    }

    setDisplayedCharacters(filteredCharacters);
  };

  return (
    <>
      <span className="characters__category">Category</span>
      <select
        className="characters__filter"
        onChange={handleFilterChange}
        value={selectedCategory}
      >
        <option value="All">All</option>
        <option value="films">Films</option>
        <option value="tvShows">TV Shows</option>
        <option value="videoGames">Video Games</option>
        <option value="shortFilms">Short Films</option>
      </select>
    </>
  );
}
