import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Error } from "src/components/molecules";

test("error page should be render correctly", () => {
  render(<Error />);
  expect(screen.getByText(/Something Went Wrong /i)).toBeInTheDocument();
});
