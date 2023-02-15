import React from "react";
import Footer from "../footer/footer";
import { Menu } from "../menu/menu";
import { AppRouter } from "../app.router/app.router";
import { Header } from "../header/header";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Characters", path: "/characters" },
  { label: "Favorites", path: "/favorites" },
  { label: "About", path: "/about" },
];

function App() {
  return (
    <div className="App">
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer />
    </div>
  );
}

export default App;
