import type { Meta, StoryObj } from "@storybook/react"
import PinInput from "@/components/ui/pin-input"

const LENGTHS = [4, 5, 6] as const

const meta: Meta<typeof PinInput> = {
  title: "Components/PIN Input",
  component: PinInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["label", "length", "masked", "defaultValue", "error", "supportingText"],
    },
  },
  argTypes: {
    label: { control: "text" },
    length: { control: "radio", options: LENGTHS },
    masked: { control: "boolean" },
    defaultValue: { control: "text" },
    error: { control: "boolean" },
    supportingText: { control: "text" },
    onValueChange: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    label: "Label",
    length: 4,
    masked: true,
    supportingText: "Message goes here",
  },
}

export default meta
type Story = StoryObj<typeof PinInput>

export const Default: Story = {}

export const Lengths: Story = {
  parameters: {
    controls: { include: ["masked"] },
  },
  args: {
    masked: true,
  },
  render: ({ masked }) => (
    <div className="flex flex-wrap gap-[var(--k-spacing-10)]">
      {LENGTHS.map((length) => (
        <PinInput key={length} length={length} masked={masked} defaultValue="111111" />
      ))}
    </div>
  ),
}

export const States: Story = {
  parameters: {
    controls: { include: ["masked", "length"] },
  },
  args: {
    masked: true,
    length: 4,
  },
  render: ({ masked, length }) => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-10)]">
      <PinInput length={length} masked={masked} />
      <PinInput length={length} masked={masked} defaultValue="1" />
      <PinInput length={length} masked={masked} defaultValue="111111" />
      <PinInput length={length} masked={masked} defaultValue="111111" error />
    </div>
  ),
}
