import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/DefaultTextField";
const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    errorMessage: { control: "text", description: "텍스트 필드의 에러 메세지" },
    iconPath: { control: "text", description: "이미지의 경로" },
    iconAlt: { control: "text", description: "이미지의 alt 속성" },
    onIconClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
    id: { control: "text", description: "텍스트 필드의 id" },
    placeholder: { control: "text", description: "텍스트 필드의 placeholder" },
    onChange: {
      action: "clicked",
      description: "텍스트 필드의 클릭 이벤트",
    },
    value: { control: "text", description: "텍스트 필드의 값" },
    isError: { control: "boolean", description: "" },
  },
  args: {
    errorMessage: "",
    iconPath: "",
    iconAlt: "icon",
    id: "",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    isError: false,
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorMessage: "텍스트를 확인해주세요",
    iconPath: "/icons/ic-cancel.svg",
    iconAlt: "icon",
    onIconClick: () => {},
    id: "email",
    placeholder: "텍스트를 입력해주세요",
    onChange: () => {},
    value: "",
    isError: false,
  },
};
