import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Modal } from "src/components/atoms";

test("modal should be render correctly", () => {
  const mockFn = jest.fn();
  render(
    <Modal open={true} handleClose={mockFn}>
      Modal body
    </Modal>
  );
  expect(screen.getByText(/Modal body/i)).toBeInTheDocument();
});
