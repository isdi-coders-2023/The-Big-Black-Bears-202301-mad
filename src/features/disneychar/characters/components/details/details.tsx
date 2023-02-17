/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import { CharStructure } from "../../models/character";
import "./details.scss";
export type CardProps = {
  character: CharStructure;
};

export default function Details({ character }: CardProps) {
  return (
    <>
      <div className="details-page">
        <Link to={"/characters"}>
          <button>
            <span className="button_top">Back</span>
          </button>
        </Link>
        <h2 className="details-title">Details</h2>
        <span className="details-row">
          <span className="details-card">
            <div className="details-imgcontainer">
              <img
                src={character.imageUrl}
                alt="Details card image"
                className="details-image"
              />
            </div>

            <ul className="card-details">
              <li>{character.name}</li>
              {character.films && <li>Films: {character.films}</li>}
              {character.shortFilms && (
                <li>Short Films: {character.shortFilms}</li>
              )}
              {character.tvShows && <li>TV Shows: {character.tvShows}</li>}
              {character.videoGames && (
                <li>Video Games: {character.videoGames}</li>
              )}
            </ul>
          </span>
        </span>
      </div>
    </>
  );
}
