import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"
import { RadioButton, RadioField, RadioGroup } from "@/components/ui/radio-group"

const OPTIONS = Array.from({ length: 6 }, (_, index) => ({
  value: String(index + 1),
  label: `Option ${index + 1}`,
}))

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Radio Group",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["label", "showLabel", "type", "showRadio", "value", "defaultValue", "disabled"],
    },
  },
  argTypes: {
    label: { control: "text" },
    showLabel: { control: "boolean" },
    type: {
      control: "select",
      options: ["Inline", "Stacked"],
    },
    showRadio: { control: "boolean" },
    value: { control: "text" },
    defaultValue: { control: "text" },
    disabled: { control: "boolean" },
    options: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    label: "Label",
    showLabel: true,
    type: "Inline",
    showRadio: false,
    defaultValue: "2",
    options: OPTIONS.slice(0, 2),
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {}

export const RadioButtonStates: Story = {
  name: "Radio Button",
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <RadioGroupPrimitive.Root defaultValue="selected">
      <div className="flex items-center gap-[var(--k-spacing-4)]">
        <RadioButton value="default" aria-label="Default" />
        <RadioButton value="selected" aria-label="Selected" />
        <RadioButton value="disabled" aria-label="Disabled" disabled />
      </div>
    </RadioGroupPrimitive.Root>
  ),
}

export const RadioFieldStates: Story = {
  name: "Radio Field",
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-x-[var(--k-spacing-12)] gap-y-[var(--k-spacing-6)]">
      <RadioGroupPrimitive.Root>
        <RadioField value="default" label="Label" />
      </RadioGroupPrimitive.Root>
      <RadioGroupPrimitive.Root>
        <RadioField value="default-radio" label="Label" showRadio />
      </RadioGroupPrimitive.Root>
      <RadioGroupPrimitive.Root defaultValue="selected">
        <RadioField value="selected" label="Label" />
      </RadioGroupPrimitive.Root>
      <RadioGroupPrimitive.Root defaultValue="selected-radio">
        <RadioField value="selected-radio" label="Label" showRadio />
      </RadioGroupPrimitive.Root>
      <RadioGroupPrimitive.Root>
        <RadioField value="promo" label="Label" showPromoBadge />
      </RadioGroupPrimitive.Root>
      <RadioGroupPrimitive.Root>
        <RadioField value="promo-radio" label="Label" showRadio showPromoBadge />
      </RadioGroupPrimitive.Root>
    </div>
  ),
}

export const Inline: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col gap-[var(--k-spacing-8)]">
      {[2, 3, 4, 5, 6, 8].map((count) => (
        <RadioGroup
          key={count}
          label="Label"
          type="Inline"
          defaultValue="1"
          options={Array.from({ length: count }, (_, index) => ({
            value: String(index + 1),
            label: `Option ${index + 1}`,
          }))}
        />
      ))}
    </div>
  ),
}

export const Stacked: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col gap-[var(--k-spacing-8)]">
      {[2, 3, 4, 5, 6, 8].map((count) => (
        <RadioGroup
          key={count}
          label="Label"
          type="Stacked"
          defaultValue="1"
          options={Array.from({ length: count }, (_, index) => ({
            value: String(index + 1),
            label: `Option ${index + 1}`,
          }))}
        />
      ))}
    </div>
  ),
}
