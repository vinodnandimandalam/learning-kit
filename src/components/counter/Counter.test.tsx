import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("render component properly", () => {
    render(<Counter />);
    const countEle = screen.getByRole("heading", { level: 1 });
    expect(countEle).toBeTruthy();
  });

  test("should render a count of 0", () => {
    render(<Counter />);
    const countEle = screen.getByRole("paragraph");
    expect(countEle).toBeInTheDocument();
  });

  test("should increment count after clicking on increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButtonEle = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButtonEle);
    const countEle = screen.getByRole("paragraph");
    expect(countEle).toHaveTextContent("1");
  });

  test("should increment count to 2 after clicking increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButtonEle = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButtonEle);
    await user.click(incrementButtonEle);
    const countEle = screen.getByRole("paragraph");
    expect(countEle).toHaveTextContent("2");
  });

  test("should contain the value as entered in the amount input", async () => {
    user.setup();
    render(<Counter />);
    const amountInputEle = screen.getByRole("spinbutton");
    await user.type(amountInputEle, "10");
    const incrementByAmountButtonEle = screen.getByRole("button", {
      name: "Increment by amount",
    });
    await user.click(incrementByAmountButtonEle);
    const countEle = screen.getByRole("paragraph");
    expect(countEle).toHaveTextContent("10");
  });

  test("check the focus shift when clicking on tab button", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    const amountInputEle = screen.getByRole("spinbutton");
    const incrementByAmountButtonEle = screen.getByRole("button", {
      name: "Increment by amount",
    });
    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(decrementBtn).toHaveFocus();
    await user.tab();
    expect(amountInputEle).toHaveFocus();
    await user.tab();
    expect(incrementByAmountButtonEle).toHaveFocus();
  });
});
