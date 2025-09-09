import { render, screen } from "@testing-library/react";
import Counter2 from "./Counter2";
import user from "@testing-library/user-event";

describe("Counter2", () => {
  test("should render the component", async () => {
    const incrementCount = jest.fn();
    const decrementCount = jest.fn();
    const count = 0;
    user.setup();
    render(
      <Counter2
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        count={count}
      />,
    );
    const incrementButtonEle = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementButtonEle = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(incrementButtonEle);
    expect(incrementCount).toHaveBeenCalledTimes(1);
    await user.click(decrementButtonEle);
    expect(decrementCount).toHaveBeenCalledTimes(1);
  });
});
