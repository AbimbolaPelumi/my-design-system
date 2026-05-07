import type { Meta, StoryObj } from "@storybook/react"
import { EyeOff } from "lucide-react"
import TextField, { ClipboardAction } from "@/components/ui/text-field"

const VALIDATIONS = ["Default", "Error", "Success"] as const

const meta: Meta<typeof TextField> = {
  title: "Components/Text Field",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: [
        "label",
        "placeholder",
        "supportingText",
        "validation",
        "disabled",
        "readOnly",
        "showInfoIcon",
        "showSupportingContent",
      ],
    },
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    supportingText: { control: "text" },
    validation: { control: "select", options: VALIDATIONS },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    showInfoIcon: { control: "boolean" },
    showSupportingContent: { control: "boolean" },
    prefix: { table: { disable: true } },
    suffix: { table: { disable: true } },
    action: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder label",
    supportingText: "Message goes here",
    validation: "Default",
    showSupportingContent: true,
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {}

export const Types: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-8)]">
      <TextField label="Default" />
      <TextField label="With prefix" prefix="₦" />
      <TextField label="With suffix" suffix="%" />
      <TextField label="With action" action={<ClipboardAction />} />
      <TextField label="With icon" rightIcon={<EyeOff aria-hidden="true" />} />
    </div>
  ),
}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-8)]">
      <TextField label="Enabled" />
      <TextField label="Filled" defaultValue="Placeholder label" />
      <TextField label="Error" validation="Error" supportingText="Message goes here" />
      <TextField label="Success" validation="Success" defaultValue="Placeholder label" />
      <TextField label="Disabled" disabled />
      <TextField label="Read-only" readOnly defaultValue="Placeholder label" />
    </div>
  ),
}
