import { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Index: Story = {
  args: {
    children: "Modal Body",
  },
};
