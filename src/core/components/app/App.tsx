import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "../footer/footer";
import { Sidebar } from "../menu/menu";

function App() {
  return (
    <div className="App">
      <h2>Jefe de equipo</h2>
      <div className="AppBurger" id="outer-container">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
