import React from "react";
import Footer from "../footer/footer";
import { AppRouter } from "../app.router/app.router";
import { Header } from "../header/header";

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
    <>
      <div className="App">
        <Header></Header>
        <AppRouter menuOptions={menuOptions}></AppRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
