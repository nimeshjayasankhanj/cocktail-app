import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CocktailCard } from "src/components/organisms";

test("should be render cocktail card", () => {
  const value = {
    id: "1234",
    name: "Cocktail",
    category: "Category",
    image: "image",
    is_favorite: false,
  };
  render(<CocktailCard value={value} isFavoritePage={false} index={1} />);
  expect(screen.getByText(/Cocktail/i)).toBeInTheDocument();
  expect(screen.getByText(/Category/i)).toBeInTheDocument();
});
