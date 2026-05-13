import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Select from "@/components/ui/select"
import { SpendCategoryChip, SpendCategorySelect, spendCategories } from "@/components/ui/spend-category"

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["label", "placeholder", "showInfoIcon", "showSupportingContent", "disabled"],
    },
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    showInfoIcon: { control: "boolean" },
    showSupportingContent: { control: "boolean" },
    disabled: { control: "boolean" },
    options: { table: { disable: true } },
    className: { table: { disable: true } },
    triggerClassName: { table: { disable: true } },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder label",
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-8)]">
      <Select label="Enabled" />
      <Select label="Selected" defaultValue="one" />
      <Select label="Disabled" disabled defaultValue="one" />
      <Select label="Supporting" showSupportingContent />
    </div>
  ),
}

export const SpendCategory: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col gap-[var(--k-spacing-8)]">
      <SpendCategorySelect />
      <div className="flex max-w-[720px] flex-wrap gap-[var(--k-spacing-3)]">
        {spendCategories.slice(0, 12).map((category, index) => (
          <SpendCategoryChip key={category} category={category} selected={index % 4 === 0} />
        ))}
      </div>
    </div>
  ),
}
