import { render, screen } from "@testing-library/react";
import AboutPage from "./about";

describe("Given AboutPage component", () => {
  describe("When it is render", () => {
    test("Then it should have the About us in the screen", () => {
      render(<AboutPage />);
      const element = screen.getByText(/About us/i);
      expect(element).toBeInTheDocument();
    });
  });
});
