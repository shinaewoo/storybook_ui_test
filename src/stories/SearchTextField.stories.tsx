import type { Meta, StoryObj } from "@storybook/react";
import SearchTextField from "../components/SearchTextField";
const meta = {
  title: "TextFields/SearchTextField",
  component: SearchTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "328px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: { control: "text", description: "텍스트 필드의 값" },
    onChange: {
      action: "changed",
      description: "텍스트 필드의 onChange 이벤트",
    },
    onIconClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
  },
  args: {
    value: "",
    onChange: () => {},
    onIconClick: () => {},
  },
} satisfies Meta<typeof SearchTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
  },
};
