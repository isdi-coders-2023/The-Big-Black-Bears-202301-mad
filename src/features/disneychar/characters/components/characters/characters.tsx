import "./characters.scss";

import { Card } from "../card/card";
import { useContext, useEffect, useState } from "react";
import { CharsContext } from "../../context/characters.context";
import { CharStructure } from "../../models/character";
import { Filter } from "../filter/filter";

export default function Characters() {
  const { remote } = useContext(CharsContext);

  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharStructure[]>([]);
  const [displayedCharacters, setDisplayedCharacters] = useState<
    CharStructure[]
  >([]);

  useEffect(() => {
    remote?.loadPublicChar(page)?.then(() => {
      // Do something after loading characters
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (remote?.char) {
      setCharacters(remote.char);
      setDisplayedCharacters(remote.char);
    }
  }, [remote]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <section className="characters">
      <h2 className="characters__title">Our characters</h2>
      <Filter
        characters={characters}
        setDisplayedCharacters={setDisplayedCharacters}
      />
      <ul className="characters__list">
        {displayedCharacters.map((item: CharStructure) => (
          <Card key={item.id} character={item}></Card>
        ))}
      </ul>
      <div className="characters__buttons">
        <button id="prev" title="prev" onClick={handlePrevPage}>
          <img
            className="characters__prev"
            src="../img/prev-button.svg"
            alt="previous button"
          ></img>
        </button>
        Page {page}
        <button onClick={handleNextPage}>
          <img
            className="characters__next"
            src="../img/next-button.svg"
            alt="next button"
          ></img>
        </button>
      </div>
    </section>
  );
}
