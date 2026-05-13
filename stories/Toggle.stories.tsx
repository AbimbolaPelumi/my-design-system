import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import Toggle from "@/components/ui/toggle"

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["checked", "defaultChecked", "disabled"],
    },
  },
  argTypes: {
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    defaultChecked: false,
    "aria-label": "Toggle",
  },
}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-3 gap-x-[var(--k-spacing-6)] gap-y-[var(--k-spacing-5)]">
      <Toggle aria-label="Off" />
      <Toggle
        aria-label="Off hover preview"
        className="[&_[data-slot=toggle-track]]:bg-[var(--k-color-bg-secondary)]"
      />
      <Toggle aria-label="Off disabled" disabled />
      <Toggle aria-label="On" checked />
      <Toggle
        aria-label="On hover preview"
        checked
        className="[&_[data-slot=toggle-track]]:bg-[var(--k-lavender-400)]"
      />
      <Toggle aria-label="On disabled" checked disabled />
    </div>
  ),
}
