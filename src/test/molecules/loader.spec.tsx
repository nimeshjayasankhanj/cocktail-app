import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Loader } from "src/components/molecules";

test("loading page shoud be render correctly", () => {
  render(<Loader />);
  expect(screen.getByRole("loader")).toBeInTheDocument();
});
