import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight, Plus } from "lucide-react"
import Button, { type ButtonProps } from "@/components/ui/button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["Filled", "Tonal", "Outlined", "Text"],
    },
    size: {
      control: "select",
      options: ["lg", "md", "sm", "xs"],
    },
    isDestructive: { control: "boolean" },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
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

// ─── Filled ───────────────────────────────────────────────────────────────────

export const Filled: Story = {
  args: { variant: "Filled", size: "lg" },
}

export const FilledDisabled: Story = {
  args: { variant: "Filled", size: "lg", disabled: true },
}

export const FilledLoading: Story = {
  args: { variant: "Filled", size: "lg", isLoading: true },
}

export const FilledDestructive: Story = {
  args: { variant: "Filled", size: "lg", isDestructive: true },
}

export const FilledDestructiveDisabled: Story = {
  args: { variant: "Filled", size: "lg", isDestructive: true, disabled: true },
}

export const FilledDestructiveLoading: Story = {
  args: { variant: "Filled", size: "lg", isDestructive: true, isLoading: true },
}

// ─── Tonal ────────────────────────────────────────────────────────────────────

export const Tonal: Story = {
  args: { variant: "Tonal", size: "lg" },
}

export const TonalDisabled: Story = {
  args: { variant: "Tonal", size: "lg", disabled: true },
}

export const TonalLoading: Story = {
  args: { variant: "Tonal", size: "lg", isLoading: true },
}

// ─── Outlined ─────────────────────────────────────────────────────────────────

export const Outlined: Story = {
  args: { variant: "Outlined", size: "lg" },
}

export const OutlinedDisabled: Story = {
  args: { variant: "Outlined", size: "lg", disabled: true },
}

export const OutlinedLoading: Story = {
  args: { variant: "Outlined", size: "lg", isLoading: true },
}

// ─── Text ─────────────────────────────────────────────────────────────────────

export const Text: Story = {
  args: { variant: "Text", size: "lg" },
}

export const TextDisabled: Story = {
  args: { variant: "Text", size: "lg", disabled: true },
}

// ─── With icons ───────────────────────────────────────────────────────────────

export const WithLeftIcon: Story = {
  args: {
    variant: "Filled",
    size: "lg",
    leftIcon: <Plus />,
  },
}

export const WithRightIcon: Story = {
  args: {
    variant: "Filled",
    size: "lg",
    rightIcon: <ArrowRight />,
  },
}

export const WithBothIcons: Story = {
  args: {
    variant: "Filled",
    size: "lg",
    leftIcon: <Plus />,
    rightIcon: <ArrowRight />,
  },
}

// ─── All sizes ────────────────────────────────────────────────────────────────

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4 flex-wrap">
      {(["lg", "md", "sm", "xs"] as const).map((size) => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
  args: { variant: "Filled" },
}

// ─── All variants ─────────────────────────────────────────────────────────────

const VARIANTS: ButtonProps["variant"][] = ["Filled", "Tonal", "Outlined", "Text"]
const STATES: { label: string; props: Partial<ButtonProps> }[] = [
  { label: "Enabled", props: {} },
  { label: "Disabled", props: { disabled: true } },
  { label: "Loading", props: { isLoading: true } },
]

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div className="grid grid-cols-[100px_repeat(3,140px)] gap-4 items-center">
        <span />
        {STATES.map(({ label }) => (
          <span
            key={label}
            className="text-xs font-semibold text-center"
            style={{ color: "var(--k-color-text-secondary)" }}
          >
            {label}
          </span>
        ))}
      </div>

      {VARIANTS.map((variant) => (
        <div key={variant} className="grid grid-cols-[100px_repeat(3,140px)] gap-4 items-center">
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--k-color-text-secondary)" }}
          >
            {variant}
          </span>
          {STATES.map(({ label, props: stateProps }) => (
            <div key={label} className="flex justify-center">
              <Button variant={variant} size="md" {...stateProps}>
                Label
              </Button>
            </div>
          ))}
        </div>
      ))}

      <div className="grid grid-cols-[100px_repeat(3,140px)] gap-4 items-center">
        <span
          className="text-xs font-semibold"
          style={{ color: "var(--k-color-text-secondary)" }}
        >
          Destructive
        </span>
        {STATES.map(({ label, props: stateProps }) => (
          <div key={label} className="flex justify-center">
            <Button variant="Filled" size="md" isDestructive {...stateProps}>
              Label
            </Button>
          </div>
        ))}
      </div>
    </div>
  ),
}
