import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Empty } from "src/components/molecules";

test("empty component should be render correctly", () => {
  render(<Empty />);
  expect(screen.getByText(/Sorry, No Data Found !/i)).toBeInTheDocument();
});
