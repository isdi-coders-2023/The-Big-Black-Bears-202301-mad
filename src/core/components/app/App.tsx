import React from "react";
import Footer from "../footer/footer";
import { Menu } from "../menu/menu";
import { Header } from "../header/header";
import { AppRouter } from "../app.router/app.router";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "About", path: "/about" },
  { label: "Characters", path: "/characters" },
  { label: "Favorites", path: "/favorites" },
];

export const routesOptions: MenuOption[] = [
  { label: "Details", path: "/details/:id" },
];

function App() {
  return (
    <div className="App">
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <AppRouter
        menuOptions={menuOptions}
        routesOptions={routesOptions}
      ></AppRouter>
      <Footer />
    </div>
  );
}

export default App;
