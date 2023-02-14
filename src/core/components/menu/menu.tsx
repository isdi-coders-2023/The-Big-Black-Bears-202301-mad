import "./menu.scss";
import { BiHomeAlt, BiGroup, BiStar, BiUserCircle } from "react-icons/bi";

export const Menu = () => {
  return (
    <>
      <div className="menu_burger">
        <img
          className="logos__logo3"
          src="../img/burger.png"
          alt="Burger logo"
        />
        <div className="menu_paths">
          <a className="menu-item" href="/">
            <BiHomeAlt />
            Home
          </a>
          <a className="menu-item" href="/user">
            <BiGroup />
            About
          </a>
          <a className="menu-item" href="/result">
            <BiUserCircle />
            Characters
          </a>
          <a className="menu-item" href="/login">
            <BiStar />
            Favourites
          </a>
        </div>
      </div>
    </>
  );
};
