import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders name in hero", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /bhavika aggarwal/i })
  ).toBeInTheDocument();
});
