import type { Meta, StoryObj } from "@storybook/react";
import ChatTextField from "../components/ChatTextField";
const meta = {
  title: "TextFields/ChatTextField",
  component: ChatTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "264px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    type: {
      control: "radio",
      options: ["text", "password"],
      description: `"text" "password"`,
    },
    value: { control: "text", description: "텍스트 필드의 값" },
    onChange: {
      action: "changed",
      description: "텍스트 필드의 클릭 이벤트",
    },
    onIconClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
  },
  args: {
    type: "text",
    value: "",
    onChange: () => {},
    onIconClick: () => {},
  },
} satisfies Meta<typeof ChatTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    value: "",
  },
};
