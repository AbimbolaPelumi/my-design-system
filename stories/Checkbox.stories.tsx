import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Checkbox from "@/components/ui/checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["checked", "defaultChecked", "disabled"],
    },
  },
  argTypes: {
    checked: {
      control: "select",
      options: [false, true, "indeterminate"],
    },
    defaultChecked: {
      control: "select",
      options: [false, true, "indeterminate"],
    },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    "aria-label": "Accept terms",
  },
}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-x-[var(--k-spacing-6)] gap-y-[var(--k-spacing-4)]">
      <Checkbox aria-label="Unchecked" />
      <Checkbox aria-label="Unchecked disabled" disabled />

      <Checkbox aria-label="Checked" checked />
      <Checkbox aria-label="Checked disabled" checked disabled />

      <Checkbox aria-label="Indeterminate" checked="indeterminate" />
      <Checkbox aria-label="Indeterminate disabled" checked="indeterminate" disabled />
    </div>
  ),
}
