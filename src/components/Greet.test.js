import { render, screen } from "@testing-library/react";
import Greet from "./Greet";
import userEvent from "@testing-library/user-event";
describe("Grreting Component", () => {
  test("render greeting page", () => {
    //--------------------<< Arrange >>--------------------
    render(<Greet />);

    //--------------------<< Act >>--------------------

    //--------------------<< Assert >>--------------------
    const greetText = screen.getByText("greeting page", { exact: false });

    expect(greetText).toBeInTheDocument();
  });

  test("renders greeting page text if button wasent clicked", () => {
    render(<Greet />);

    //--------------------<< Act >>--------------------

    //--------------------<< Assert >>--------------------
    const greetText = screen.getByText("greeting page", { exact: false });

    expect(greetText).toBeInTheDocument();
  });

  test("renders my name is shayan text if button was clicked", () => {
    render(<Greet />);

    //--------------------<< Act >>--------------------
    const button = screen.getByRole("button");
    userEvent.click(button);
    //--------------------<< Assert >>--------------------
    const greetText = screen.getByText("my name is shayan", { exact: false });

    expect(greetText).toBeInTheDocument();
  });
  test("doesent render greeting page text if button was clicked", () => {
    render(<Greet />);

    //--------------------<< Act >>--------------------
    const button = screen.getByRole("button");
    userEvent.click(button);
    //--------------------<< Assert >>--------------------
    const greetText = screen.queryByText("greeting page", { exact: false });

    expect(greetText).toBeNull();
  });
});
