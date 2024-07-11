import type { Meta, StoryObj } from "@storybook/react";
import TagList from "../components/TagList";
const meta = {
  title: "List/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: { control: "object", description: "태그 리스트" },
    onTagClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    tagList: ["tag1", "tag2", "tag3"],
    onTagClick: () => {},
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3"],
  },
};
