import { Meta, StoryObj } from "@storybook/react";
import { CocktailCard } from ".";

const meta: Meta<typeof CocktailCard> = {
  title: "cocktail-card",
  component: CocktailCard,
};

export default meta;

type Story = StoryObj<typeof CocktailCard>;

export const Index: Story = {
  args: {
    value: {
      id: "123",
      name: "Cocktail",
      category: "Category",
      is_favorite: false,
      image:
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ja3RhaWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
  },
};
