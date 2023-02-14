import React from "react";
import { Header } from "../header/header";
import "./App.css";
import Footer from "../footer/footer";

import AboutPage from "../../../features/about/page/about";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Footer />
    </div>
  );
}

export default App;
