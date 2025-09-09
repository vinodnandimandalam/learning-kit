require("@testing-library/jest-dom");

// Import and setup MSW server
import { server } from "./src/mocks/server";

beforeAll(() => {
  console.log("MSW: Starting server...");
  server.listen();
  console.log("MSW: Server started");
});

afterEach(() => {
  console.log("MSW: Resetting handlers...");
  server.resetHandlers();
});

afterAll(() => {
  console.log("MSW: Closing server...");
  server.close();
});
