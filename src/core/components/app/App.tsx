import React from "react";
import { Header } from "../header/header";
import Footer from "../footer/footer";
import { AppRouter } from "../app.router/app.router";

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: "Home", path: "/home" },
  { label: "Characters", path: "/characters" },
  { label: "details", path: "/details" },
  { label: "Favorites", path: "/favorites" },
  { label: "Add", path: "/add" },
  { label: "Edit", path: "/edit" },
  { label: "About", path: "/about" },
  { label: "Error", path: "/error" },
];

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header></Header>
        <AppRouter menuOptions={menuOptions}></AppRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
