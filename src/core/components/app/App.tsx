import React from "react";
import { Header } from "../header/header";
import "./App.css";
import Footer from "../footer/footer";
import { HomePage } from "../../../features/home/page/home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <Footer />
    </div>
  );
}

export default App;
