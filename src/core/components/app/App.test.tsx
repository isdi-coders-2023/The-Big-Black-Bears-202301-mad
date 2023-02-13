import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { AppRouter } from "../app.router/app.router";
import Footer from "../footer/footer";

jest.mock("../footer/footer");

describe("Given app component", () => {
  describe("When it is rendered", () => {
    test("then should render a text on the screen", () => {
      render(<App />);
      expect(Footer).toHaveBeenCalled();
    });
  });
});
