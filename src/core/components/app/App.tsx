import React from "react";
import Footer from "../footer/footer";
import { Menu } from "../menu/menu";
import { Header } from "../header/header";
import { AppRouter } from "../app.router/app.router";
import { CharStructure } from "../../../features/disneychar/characters/models/character";

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
  { label: "Details", path: "/details" },
];

export const mockCharacters: CharStructure = {
  id: 1,
  name: "9-Eye",
  imageUrl: "https://static.wikia.nocookie.net/disney/images/7/77/9-eye.jpg",
  isFavorite: false,
  films: ["Los goonies"],
  shortFilms: ["El circo de las mariposas"],
  tvShows: ["SouthPark"],
  videoGames: ["Game"],
};
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
