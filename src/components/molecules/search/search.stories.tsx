import { Meta, StoryObj } from "@storybook/react";
import { SearchBox } from ".";

const meta: Meta<typeof SearchBox> = {
  title: "search-box",
  component: SearchBox,
};

export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Index: Story = {
  args: {},
};
