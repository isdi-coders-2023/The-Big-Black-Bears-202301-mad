/* eslint-disable jsx-a11y/img-redundant-alt */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CharsContext } from "../../context/characters.context";
import { CharStructure } from "../../models/character";
import "./details.scss";
export type CardProps = {
  character: CharStructure;
};

export default function Details() {
  const { id } = useParams();
  const { remote } = useContext(CharsContext);
  const [characterd, setCharacterd] = useState<{ [key: number]: any }>();

  const contextChar = remote.char.find((item) => item.name === id);
  useEffect(() => {
    const loadChar = async () => {
      const characterd: any = await getChar(id as unknown as number);
      console.log(characterd);
      setCharacterd(characterd);
    };
    loadChar();
  }, [id]);

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
              {contextChar?.films && <li>Films: {contextChar.films}</li>}
              {contextChar?.shortFilms && (
                <li>Short Films: {contextChar.shortFilms}</li>
              )}
              {contextChar?.tvShows && (
                <li>TV Shows: {contextChar?.tvShows}</li>
              )}
              {contextChar?.videoGames && (
                <li>Video Games: {contextChar.videoGames}</li>
              )}
            </ul>
          </span>
        </span>
      </div>
    </>
  );
}
function getChar(arg0: number) {
  throw new Error("Function not implemented.");
}
