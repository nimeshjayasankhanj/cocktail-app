import { Meta, StoryObj } from "@storybook/react";
import { Error } from ".";

const meta: Meta<typeof Error> = {
  title: "error",
  component: Error,
};

export default meta;

type Story = StoryObj<typeof Error>;

export const index: Story = {
  args: {},
};
