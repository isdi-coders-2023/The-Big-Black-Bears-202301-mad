import { Link } from "react-router-dom";
import "./menu.scss";
import { MenuOption } from "../app/App";

type MenuProps = {
  options: MenuOption[];
};
export const Menu = ({ options }: MenuProps) => {
  return (
    <>
      <nav className="menu_burger">
        <div className="menu__hover">
          <img
            className="logos__logo3"
            src="../img/burger.png"
            alt="Burger logo"
          />

          <ul className="menu_paths">
            {options.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="menu-item">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
