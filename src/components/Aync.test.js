import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("testing async component", () => {
  test("render posts if request succeded", async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
