import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Grreting Component", () => {
  test("render greeting page", () => {
    //--------------------<< Arrange >>--------------------
    render(<Greet />);

    //--------------------<< Act >>--------------------

    //--------------------<< Assert >>--------------------
    const greetText = screen.getByText("greeting page", { exact: false });

    expect(greetText).toBeInTheDocument();
  });
});
