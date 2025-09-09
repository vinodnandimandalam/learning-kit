import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("Application", () => {
  test("render component properly", () => {
    render(<App />);
    //tests if paragraph text is present
    const paragraphEle = screen.getByText("Please fill out the form below");
    expect(paragraphEle).toBeTruthy();

    // tests if element based on the data-testid
    const nameInputEle = screen.getByTestId("name-input");
    expect(nameInputEle).toBeTruthy();

    // tests element based on the title
    const closeEle = screen.getByTitle("close");
    expect(closeEle).toBeTruthy();

    // tests if h1 element present
    const h1Ele = screen.getByRole("heading", { level: 1 });
    expect(h1Ele).toBeTruthy();

    //tests if h2 element present
    const h2Ele = screen.getByRole("heading", { level: 2 });
    expect(h2Ele).toBeTruthy();

    // tests if input element present
    const textBoxEle = screen.getByRole("textbox", { name: "Name" });
    expect(textBoxEle).toBeTruthy();

    //tests if input element based on display value
    const textBoxEle1 = screen.getByDisplayValue("vinod");
    expect(textBoxEle1).toBeTruthy();

    //tests if input element present by get label text
    const labelEle = screen.getByLabelText("Name");
    expect(labelEle).toBeTruthy();

    //tests if text area element present
    const textAreaEle = screen.getByRole("textbox", { name: "job location" });
    expect(textAreaEle).toBeTruthy();

    // tests if checkbox element present
    const checkboxEle = screen.getByRole("checkbox");
    expect(checkboxEle).toBeTruthy();

    // tests if button element present
    const buttonEle = screen.getByRole("button");
    expect(buttonEle).toBeTruthy();
  });
});
