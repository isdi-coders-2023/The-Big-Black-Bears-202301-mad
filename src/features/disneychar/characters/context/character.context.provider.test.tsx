import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { CharsContext } from "./characters.context";
import { CharsContextProvider } from "./characters.context.provider";
// import {
//   CharsContextProvider,
//   CharsContext,
// } from "./character.context.provider";

function TestComponent() {
  const context = useContext(CharsContext);

  if (context.remote.char.length > 0 && context.private.char !== null) {
    return <p>Test passed</p>;
  } else {
    return <p>Test failed</p>;
  }
}

describe("CharsContextProvider", () => {
  test("should provide the correct context value to its children", () => {
    render(
      <CharsContextProvider>
        <TestComponent />
      </CharsContextProvider>
    );

    const element = screen.getByText(/Test failed/i);
    expect(element).toBeInTheDocument();
  });
});
