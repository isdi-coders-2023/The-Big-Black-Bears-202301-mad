/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      render(<Form />);
      elements = [
        ...screen.getAllByRole("checkbox"),
        ...screen.getAllByRole("button"),
      ];
    });

    test("Then, it should be a checkbox", () => {
      expect(elements[0]).toBeInTheDocument();
      userEvent.click(elements[0]);
    });
    test("Then, if the user clicks the add or edit button", () => {
      expect(elements[1]).toBeInTheDocument();
      userEvent.click(elements[1]);
    });
  });
});
