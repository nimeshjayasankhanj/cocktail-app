import { render, screen } from "@testing-library/react";
import { Button } from "src/components/atoms";
import "@testing-library/jest-dom";

test("button should be render correctly", () => {
  const mockFn = jest.fn();
  render(<Button onClick={mockFn}>Button</Button>);
  expect(screen.getByText(/Button/i)).toBeInTheDocument();
});
