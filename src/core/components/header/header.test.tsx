/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import { Header } from "./header";

describe("Header", () => {
  test("should render the Disney logos", () => {
    const { getByAltText } = render(
      <Header>
        <></>
      </Header>
    );
    const logo1 = getByAltText("Disney logo");
    const logo2 = getByAltText("Disney logo1");
    expect(logo1).toBeInTheDocument();
    expect(logo2).toBeInTheDocument();
  });

  test("should render the children", () => {
    const childElement = <h1>Hello World</h1>;
    const { getByText } = render(<Header>{childElement}</Header>);
    const child = getByText("Hello World");
    expect(child).toBeInTheDocument();
  });
});
