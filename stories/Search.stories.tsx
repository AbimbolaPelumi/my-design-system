import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Search from "@/components/ui/search"

const meta: Meta<typeof Search> = {
  title: "Components/Search",
  component: Search,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["placeholder", "defaultValue", "disabled"],
    },
  },
  argTypes: {
    placeholder: { control: "text" },
    defaultValue: { control: "text" },
    disabled: { control: "boolean" },
    onClear: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    placeholder: "Search",
  },
}

export default meta
type Story = StoryObj<typeof Search>

export const Default: Story = {}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-wrap gap-[var(--k-spacing-5)]">
      <Search placeholder="Search" />
      <Search placeholder="Search" defaultValue="Search" />
      <Search placeholder="Search" disabled />
    </div>
  ),
}
