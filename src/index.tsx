import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/core/components/app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CharsContextProvider } from "./features/disneychar/characters/context/characters.context.provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CharsContextProvider>
      <Router>
        <App />
      </Router>
    </CharsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
