import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  test("render component properly", () => {
    render(<Skills skills={["HTML", "CSS", "JavaScript"]} />);
    const listItemEle = screen.getAllByRole("listitem");
    expect(listItemEle).toHaveLength(3);
  });

  test("renders a login button", () => {
    render(<Skills skills={["HTML", "CSS", "JavaScript"]} />);
    const loginButtonEle = screen.getByRole("button", { name: "Login" });
    expect(loginButtonEle).toBeTruthy();
  });

  test("should render a start learning button", async () => {
    render(<Skills skills={["HTML", "CSS", "JavaScript"]} />);
    const startLearningButtonEle = await screen.findAllByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButtonEle).toBeTruthy();
  });
});
