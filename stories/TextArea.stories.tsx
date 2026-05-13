import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import TextArea from "@/components/ui/text-area"

const VALIDATIONS = ["Default", "Error"] as const

const meta: Meta<typeof TextArea> = {
  title: "Components/Text Area",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: [
        "label",
        "placeholder",
        "supportingText",
        "validation",
        "showCounter",
        "showInfoIcon",
        "showSupportingText",
        "disabled",
        "readOnly",
      ],
    },
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    supportingText: { control: "text" },
    validation: { control: "select", options: VALIDATIONS },
    showCounter: { control: "boolean" },
    showInfoIcon: { control: "boolean" },
    showSupportingText: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    className: { table: { disable: true } },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder label",
    supportingText: "Message goes here",
    validation: "Default",
    showCounter: true,
    showSupportingText: true,
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-8)]">
      <TextArea label="Enabled" />
      <TextArea label="Filled" defaultValue="Placeholder label" />
      <TextArea label="Error" validation="Error" defaultValue="Placeholder label" />
      <TextArea label="Disabled" disabled />
      <TextArea label="Read-only" readOnly defaultValue="Placeholder label" />
    </div>
  ),
}
