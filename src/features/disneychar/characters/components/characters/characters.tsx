import "./characters.scss";

import { Card } from "../card/card";
import { useContext, useEffect, useState } from "react";
import { CharsContext } from "../../context/characters.context";
import { CharStructure } from "../../models/character";

type buttonProps = {
  children: JSX.Element;
};

export default function Characters({ children }: buttonProps) {
  const { remote } = useContext(CharsContext);

  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharStructure[]>([]);
  const [films, setFilms] = useState<CharStructure[]>([]);
  const [tvShows, setTvShows] = useState<CharStructure[]>([]);
  const [videoGames, setVideoGames] = useState<CharStructure[]>([]);
  const [shortFilms, setShortFilms] = useState<CharStructure[]>([]);
  const [displayedCharacters, setDisplayedCharacters] = useState<
    CharStructure[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    remote?.loadPublicChar(page)?.then(() => {
      // Do something after loading characters
    });
  }, [page]);

  useEffect(() => {
    if (remote?.char) {
      setCharacters(remote.char);
      setFilms(remote.char.filter((char) => char.category === "films"));
      setTvShows(remote.char.filter((char) => char.category === "tvShows"));
      setVideoGames(
        remote.char.filter((char) => char.category === "videoGames")
      );
      setShortFilms(
        remote.char.filter((char) => char.category === "shortFilms")
      );
      setDisplayedCharacters(remote.char);
    }
  }, [remote]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

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
    <section className="characters">
      <h2 className="characters__title">Our characters</h2>
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
      <ul className="characters__list">
        {displayedCharacters.map((item: CharStructure) => (
          <Card key={item.id} character={item}></Card>
        ))}
      </ul>
      <button onClick={handlePrevPage}>Prev Page</button>
      <button onClick={handleNextPage}>Next Page</button>
      {children}
    </section>
  );
}
