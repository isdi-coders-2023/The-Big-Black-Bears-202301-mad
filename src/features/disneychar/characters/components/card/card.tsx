import { CharStructure } from "../../models/character";
import "./card.scss";

type CardProps = {
  character: CharStructure;
};

export function Card({ character }: CardProps) {
  return (
    <div>
      <li className="card">
        <img
          className="card__image"
          src={character.imageUrl}
          alt="character's icon"
        ></img>
        <span>{character.name}</span>
        <button className="card__button">
          <img
            className="card__favorite"
            src="../img/favorite.png"
            alt="favorite icon"
          ></img>
        </button>
      </li>
    </div>
  );
}
