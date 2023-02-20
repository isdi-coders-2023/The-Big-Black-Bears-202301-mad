/* eslint-disable jsx-a11y/role-has-required-aria-props */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CharsContext } from "../../context/characters.context";
import { CharStructure } from "../../models/character";
import "./card.scss";

type CardProps = {
  character: CharStructure;
};

export function Card({ character }: CardProps) {
  return (
    <div>
      <li className="card">
        <div className="card__element">
          <Link to={`/details/${character.name}`}>
            <img
              className="card__image"
              src={character.imageUrl}
              alt="character's icon"
            ></img>
          </Link>
        </div>

        <span role="heading">{character.name}</span>
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
