import { render, screen } from "@testing-library/react";
import { Header } from "./header";
import { Menu } from "../menu/menu";

describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then it should have the title in the screen", () => {
      render(
        <Header>
          <Menu />
        </Header>
      );
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
});
