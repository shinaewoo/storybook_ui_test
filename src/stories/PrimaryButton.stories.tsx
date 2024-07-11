import type { Meta, StoryObj } from "@storybook/react";
import PrimaryButton from "../components/PrimaryButton";
const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: { type: "select", options: ["dark", "light", "social", "text"] },
      description: "버튼 테마",
    },
    children: { control: "text", description: "버튼 text" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
    disabled: { control: "boolean", description: "버튼 비활성화 여부" },
  },
  args: {
    theme: "dark",
    disabled: true,
    children: "",
    onClick: () => {},
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    theme: "dark",
    disabled: false,
    children: "Button",
  },
};

export const Light: Story = {
  args: {
    theme: "light",
    disabled: false,
    children: "Button",
  },
};

export const Social: Story = {
  args: {
    theme: "social",
    disabled: false,
    children: "Button",
  },
};

export const Text: Story = {
  args: {
    theme: "text",
    disabled: false,
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    theme: "dark",
    disabled: true,
    children: "Button",
  },
};
