import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SearchBox } from "src/components/molecules";

test("user should be able to enter search values", async () => {
  const mockFn = jest.fn();
  render(<SearchBox search="test" setSearch={mockFn} onSearch={mockFn} />);
  expect(screen.getByDisplayValue(/test/i)).toBeInTheDocument();
});
