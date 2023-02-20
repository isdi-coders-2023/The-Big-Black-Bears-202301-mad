/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link, useParams } from "react-router-dom";
import { CharStructure } from "../../models/character";
import "./details.scss";
import { useContext, useEffect, useState } from "react";
import { CharsContext } from "../../context/characters.context";
import { getChar } from "../../services/publicapi/char.api.public.repo";
export type CardProps = {
  character: CharStructure;
};

export default function Details() {
  const { id } = useParams();

  const { remote } = useContext(CharsContext);

  const [character, setChar] = useState<{ [key: number]: any }>();

  const contextChar = remote.char.find((char) => char.name === id);

  useEffect(() => {
    const loadChar = async () => {
      setChar(await getChar(id as unknown as number));
    };
    loadChar();
  }, [id]);

  if (character === undefined) {
    return <div>Loading...</div>;
  }

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
                src={contextChar?.imageUrl}
                alt="Details card image"
                className="details-image"
              />
            </div>

            <ul className="card-details">
              <li>{contextChar?.name}</li>
              {contextChar?.films && <li>Films: {contextChar?.films}</li>}
              {contextChar?.shortFilms && (
                <li>Short Films: {contextChar?.shortFilms}</li>
              )}
              {contextChar?.tvShows && (
                <li>TV Shows: {contextChar?.tvShows}</li>
              )}
              {contextChar?.videoGames && (
                <li>Video Games: {contextChar?.videoGames}</li>
              )}
            </ul>
          </span>
        </span>
      </div>
    </>
  );
}
