import { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";

const meta: Meta<typeof Modal> = {
  title: "modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Index: Story = {
  args: {
    children: "modal body goes here",
    open: true,
  },
};
