import "./buttons-nav.scss";
import { useContext } from "react";
import { CharsContext } from "../../context/characters.context";

export function Buttons() {


  return (
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
  );
}
