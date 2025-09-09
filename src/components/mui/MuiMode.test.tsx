import { screen } from "@testing-library/react";
import { MuiMode } from "./MuiMode";
import { render } from "../../TestUtils";

describe("MuiMode", () => {
  test("should render text correctly", () => {
    render(<MuiMode />);
    const headingEle = screen.getByRole("heading");
    expect(headingEle).toHaveTextContent("dark mode");
  });
});
