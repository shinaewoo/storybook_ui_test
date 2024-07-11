import type { Meta, StoryObj } from "@storybook/react";
import TagButton from "../components/TagButton";
const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "버튼 text" },
    isChecked: { control: "boolean", description: "버튼 활성화 여부" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    children: "button",
    isChecked: false,
    onClick: () => {},
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "button",
    isChecked: false,
  },
};
