import { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { AppProviders } from "./components/providers/App-providers";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AppProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
