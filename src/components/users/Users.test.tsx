import { render, screen, waitFor } from "@testing-library/react";
import Users from "./Users";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

describe("Users", () => {
  test("should render the component", () => {
    render(<Users />);
    const usersEle = screen.getByRole("heading", { level: 1 });
    expect(usersEle).toBeInTheDocument();
  });

  test("should render the list of users", async () => {
    render(<Users />);

    // Wait for the API call to complete and users to be rendered
    await waitFor(() => {
      const usersEle = screen.getAllByRole("listitem");
      expect(usersEle).toHaveLength(2);
    });

    // Verify the specific user names from MSW mock
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("should render the error message", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json([], { status: 500 });
      }),
    );
    render(<Users />);
    const usersEle = await screen.queryByRole("listitem");
    expect(usersEle).not.toBeInTheDocument();
  });
});
