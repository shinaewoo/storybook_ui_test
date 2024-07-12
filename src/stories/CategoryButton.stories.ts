import type { Meta, StoryObj } from "@storybook/react";
import CategoryButton from "../components/CategoryButton";
const meta = {
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "이미지의 경로" },
    iconAlt: { control: "text", description: "이미지의 alt 속성" },
    text: { control: "text", description: "버튼에 표시될 텍스트" },
    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    iconPath: "",
    iconAlt: "icon",
    text: "카테고리",
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "/icons/ic-all.svg",
    iconAlt: "icon",
    text: "카테고리",
    onClick: () => {},
  },
};
