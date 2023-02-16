/* eslint-disable testing-library/no-await-sync-query */
import { render, screen } from "@testing-library/react";
import { AppRouter } from "./app.router";
import { MemoryRouter as Router } from "react-router-dom";
import { MenuOption } from "../app/App";

const mockOptions: MenuOption[] = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Characters",
    path: "/characters",
  },
];

describe("Given AppRouter", () => {
  describe("When the route is home", () => {
    test("Then we should navigate to home", async () => {
      render(
        <Router initialEntries={["/home", "/otra"]} initialIndex={0}>
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );
      const element = await screen.findByRole("link");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the route is about", () => {
    test("Then we should navigate to about", async () => {
      render(
        <Router initialEntries={["/about", "/otra"]} initialIndex={0}>
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );
      const element = await screen.findByText(/Welcome/i);
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the route is characters", () => {
    test("Then we should navigate to characters", async () => {
      render(
        <Router initialEntries={["/characters", "/otra"]} initialIndex={0}>
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );
      const element = await screen.findByText(/Characters/i);
      expect(element).toBeInTheDocument();
    });
  });
});
