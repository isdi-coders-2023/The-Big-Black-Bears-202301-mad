import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Given Footer component", () => {
  describe("When it is render", () => {
    test("Then it should have the footer in the screen", () => {
      render(<Footer></Footer>);
      const element = screen.getByText(/BBB Copyright ©/i);
      expect(element).toBeInTheDocument();
    });
  });
});
