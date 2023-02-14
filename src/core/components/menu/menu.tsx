import { slide as Menu } from "react-burger-menu";
import "./menu.scss";
import {
  BiHomeAlt,
  BiUser,
  BiMedal,
  BiLogInCircle,
  BiLogOutCircle,
} from "react-icons/bi";

type SidemenuProps = {
  pageWrapId: string;
  outerContainerId: string;
};

export const Sidebar = ({ pageWrapId, outerContainerId }: SidemenuProps) => {
  return (
    <Menu>
      <p className="memu-title">Menu</p>
      <a className="menu-item" href="/">
        <BiHomeAlt />
        Home
      </a>
      <a className="menu-item" href="/user">
        <BiUser />
        User
      </a>
      <a className="menu-item" href="/result">
        <BiMedal />
        Result
      </a>
      <a className="menu-item" href="/login">
        <BiLogInCircle />
        Log in
      </a>
      <a className="menu-item logout" href="/logout">
        <BiLogOutCircle />
        Log out
      </a>
    </Menu>
  );
};
