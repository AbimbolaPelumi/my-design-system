import type { Meta, StoryObj } from "@storybook/react"
import PhoneNumberField from "@/components/ui/phone-number-field"

const VALIDATIONS = ["Default", "Error", "Success"] as const

const meta: Meta<typeof PhoneNumberField> = {
  title: "Components/Phone Number Field",
  component: PhoneNumberField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: [
        "label",
        "countryCode",
        "placeholder",
        "validation",
        "disabled",
        "readOnly",
        "showSupportingContent",
        "supportingText",
      ],
    },
  },
  argTypes: {
    label: { control: "text" },
    countryCode: { control: "text" },
    placeholder: { control: "text" },
    validation: { control: "select", options: VALIDATIONS },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    showSupportingContent: { control: "boolean" },
    supportingText: { control: "text" },
    className: { table: { disable: true } },
  },
  args: {
    label: "Phone Number",
    countryCode: "+234",
    placeholder: "800 000 0000",
    validation: "Default",
  },
}

export default meta
type Story = StoryObj<typeof PhoneNumberField>

export const Default: Story = {}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-8)]">
      <PhoneNumberField label="Enabled" />
      <PhoneNumberField label="Filled" defaultValue="800 000 0000" />
      <PhoneNumberField
        label="Error"
        validation="Error"
        showSupportingContent
        supportingText="Message goes here"
      />
      <PhoneNumberField
        label="Success"
        validation="Success"
        defaultValue="800 000 0000"
        showSupportingContent
        supportingText="Message goes here"
      />
      <PhoneNumberField label="Disabled" disabled />
      <PhoneNumberField label="Read-only" readOnly defaultValue="800 000 0000" />
    </div>
  ),
}
