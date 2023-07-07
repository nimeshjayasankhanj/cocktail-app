import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "src/components/atoms";

test("card should be render correctly", () => {
  render(<Card>Card body</Card>);
  expect(screen.getByText(/Card body/i)).toBeInTheDocument();
});
