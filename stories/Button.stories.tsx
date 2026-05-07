import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight, Plus } from "lucide-react"
import Button, { type ButtonProps } from "@/components/ui/button"

const VARIANTS = ["Filled", "Tonal", "Outlined", "Text"] as const
const SIZES = ["lg", "md", "sm", "xs"] as const

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["children", "variant", "size", "isDestructive", "isLoading", "disabled"],
    },
  },
  argTypes: {
    children: { control: "text" },
    variant: {
      control: "select",
      options: VARIANTS,
    },
    size: {
      control: "select",
      options: SIZES,
    },
    isDestructive: { control: "boolean" },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
    className: { table: { disable: true } },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
  },
  args: {
    children: "Label",
    variant: "Filled",
    size: "lg",
    isDestructive: false,
    isLoading: false,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-[var(--k-spacing-3)]">
      {VARIANTS.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { include: ["variant", "isDestructive", "disabled"] },
  },
  args: {
    variant: "Filled",
    isDestructive: false,
    disabled: false,
  },
  render: ({ variant, isDestructive, disabled }) => (
    <div className="flex flex-wrap items-center gap-[var(--k-spacing-3)]">
      {SIZES.map((size) => (
        <Button
          key={size}
          variant={variant}
          size={size}
          isDestructive={isDestructive}
          disabled={disabled}
        >
          {size}
        </Button>
      ))}
    </div>
  ),
}

export const States: Story = {
  parameters: {
    controls: { include: ["variant", "size", "isDestructive"] },
  },
  args: {
    variant: "Filled",
    size: "md",
    isDestructive: false,
  },
  render: ({ variant, size, isDestructive }) => {
    const states: Array<{ label: string; props: Partial<ButtonProps> }> = [
      { label: "Default", props: {} },
      { label: "Disabled", props: { disabled: true } },
      { label: "Loading", props: { isLoading: true } },
    ]

    return (
      <div className="flex flex-wrap items-center gap-[var(--k-spacing-3)]">
        {states.map(({ label, props }) => (
          <Button
            key={label}
            variant={variant}
            size={size}
            isDestructive={isDestructive}
            {...props}
          >
            {label}
          </Button>
        ))}
      </div>
    )
  },
}

export const Destructive: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-[var(--k-spacing-3)]">
      <Button variant="Filled" isDestructive>
        Filled
      </Button>
      <Button variant="Text" isDestructive>
        Text
      </Button>
      <Button variant="Filled" isDestructive disabled>
        Disabled
      </Button>
      <Button variant="Text" isDestructive disabled>
        Disabled
      </Button>
    </div>
  ),
}

export const WithIcons: Story = {
  parameters: {
    controls: { include: ["variant", "size", "disabled"] },
  },
  args: {
    variant: "Filled",
    size: "lg",
    disabled: false,
  },
  render: ({ variant, size, disabled }) => (
    <div className="flex flex-wrap items-center gap-[var(--k-spacing-3)]">
      <Button variant={variant} size={size} disabled={disabled} leftIcon={<Plus />}>
        Add
      </Button>
      <Button variant={variant} size={size} disabled={disabled} rightIcon={<ArrowRight />}>
        Continue
      </Button>
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        leftIcon={<Plus />}
        rightIcon={<ArrowRight />}
      >
        Label
      </Button>
    </div>
  ),
}
