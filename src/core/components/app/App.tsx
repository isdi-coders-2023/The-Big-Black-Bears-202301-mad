import React from "react";
import { Header } from "../header/header";
import Footer from "../footer/footer";
import { Menu } from "../menu/menu";
import { AppRouter } from "../app.router/app.router";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Characters", path: "/characters" },
  { label: "Favorites", path: "/favorites" },
  { label: "About", path: "/about" },
  { label: "details", path: "/details" },
  { label: "Add", path: "/add" },
  { label: "Edit", path: "/edit" },
  { label: "Error", path: "/error" },
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
