import { CharStructure } from "../../models/character";
import "./card.scss";

type CardProps = {
  character: CharStructure;
};

export function Card({ character }: CardProps) {
  return (
    <li className="card">
      <div>
        <img src={character.imageUrl} alt="character's icon"></img>
      </div>
      <div>
        <span>{character.name}</span>
      </div>
      <button>
        <img
          className="card__favorite"
          src="../img/favorite.png"
          alt="favorite icon"
        ></img>
      </button>
    </li>
  );
}
