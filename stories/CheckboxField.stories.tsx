import type { Meta, StoryObj } from "@storybook/react"
import CheckboxField from "@/components/ui/checkbox-field"

const meta: Meta<typeof CheckboxField> = {
  title: "Components/Checkbox Field",
  component: CheckboxField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["label", "variant", "checked", "defaultChecked", "disabled"],
    },
  },
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["Bounded", "Unbounded"],
    },
    checked: {
      control: "select",
      options: [false, true, "indeterminate"],
    },
    defaultChecked: {
      control: "select",
      options: [false, true, "indeterminate"],
    },
    disabled: { control: "boolean" },
    className: { table: { disable: true } },
    checkboxClassName: { table: { disable: true } },
    id: { table: { disable: true } },
  },
  args: {
    label: "This is a sample message",
    variant: "Bounded",
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof CheckboxField>

export const Default: Story = {
  args: {
    label: "This is a sample message",
    variant: "Bounded",
  },
}

export const Bounded: Story = {
  args: {
    label: "This is a sample message",
    variant: "Bounded",
  },
}

export const Unbounded: Story = {
  args: {
    label: "This is a sample message",
    variant: "Unbounded",
  },
}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-[343px_auto] items-center gap-x-[var(--k-spacing-12)] gap-y-[var(--k-spacing-12)]">
      <CheckboxField label="This is a sample message" variant="Bounded" />
      <CheckboxField label="This is a sample message" variant="Unbounded" />

      <CheckboxField
        label="This is a sample message"
        variant="Bounded"
        className="bg-[var(--k-color-bg-secondary)]"
      />
      <CheckboxField label="This is a sample message" variant="Unbounded" />

      <CheckboxField label="This is a sample message" variant="Bounded" checked />
      <CheckboxField label="This is a sample message" variant="Unbounded" checked />
    </div>
  ),
}
