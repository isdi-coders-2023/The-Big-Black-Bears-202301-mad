import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "../footer/footer";
import { Menu } from "../menu/menu";

function App() {
  return (
    <div className="App">
      <h2>Jefe de equipo</h2>
      <Menu></Menu>
      <Footer />
    </div>
  );
}

export default App;
