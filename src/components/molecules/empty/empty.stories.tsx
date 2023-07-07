import { Meta, StoryObj } from "@storybook/react";
import { Empty } from ".";

const meta: Meta<typeof Empty> = {
  title: "empty",
  component: Empty,
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const Index: Story = {
  args: {},
};
