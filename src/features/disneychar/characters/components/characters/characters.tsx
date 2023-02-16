import "./characters.scss";
import { Card } from "../card/card";
import { characters } from "../../mocks/characters";

export default function Characters() {
  return (
    <section className="characters">
      <h2 className="characters__title">Our characters</h2>
      <span className="characters__category">Category</span>
      <select className="characters__filter">
        <option value="All">All</option>
        <option value="Films">Films</option>
        <option value="Short films">Short films</option>
        <option value="TV Shows">TV Shows</option>
        <option value="Video Games">Video Games</option>
      </select>
      <ul className="characters__list">
        {characters.map((item) => (
          <Card key={item.id} character={item}></Card>
        ))}
      </ul>
      <div className="characters__buttons">
        <button>
          <img
            className="characters__prev"
            src="../img/prev-button.svg"
            alt="previous button"
          ></img>
        </button>

        <button>
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
