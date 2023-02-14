import React from "react";
import { Header } from "../header/header";
import "./App.css";
import Footer from "../footer/footer";
import { HomePage } from "../../../features/home/page/home";
import { Menu } from "../menu/menu";

function App() {
  return (
    <div className="App">
      <h2>Jefe de equipo</h2>
      <Header>
        <Menu></Menu>
      </Header>
      <HomePage></HomePage>
      <Footer />
    </div>
  );
}

export default App;
