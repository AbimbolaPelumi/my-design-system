import type { Meta, StoryObj } from "@storybook/react"
import { Badge, CounterBadge, StatusBadge } from "@/components/ui/badge"

const BADGE_COLOURS = [
  "Spearmint",
  "Purple",
  "Pink",
  "Orange",
  "Yellow",
  "Gray",
  "Blue",
  "Tertiary",
] as const

const STATUS_COLOURS = [
  "Red/Failed",
  "Green/Success",
  "Yellow/Pending",
  "Orange/Info",
] as const

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["colour", "size", "children"],
    },
  },
  argTypes: {
    colour: {
      control: "select",
      options: BADGE_COLOURS,
    },
    size: {
      control: "inline-radio",
      options: ["md", "sm"],
    },
    children: { control: "text" },
    className: { table: { disable: true } },
  },
  args: {
    colour: "Tertiary",
    size: "md",
    children: "LABEL",
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const Colours: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-3)]">
      {BADGE_COLOURS.map((colour) => (
        <Badge key={colour} colour={colour}>
          LABEL
        </Badge>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex items-center gap-[var(--k-spacing-4)]">
      <Badge size="md">LABEL</Badge>
      <Badge size="sm">LABEL</Badge>
    </div>
  ),
}

export const Counter: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex items-center gap-[var(--k-spacing-4)]">
      <CounterBadge variant="Filled" />
      <CounterBadge variant="Light" />
    </div>
  ),
}

export const Status: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-3)]">
      {STATUS_COLOURS.map((colour) => (
        <StatusBadge key={`${colour}-filled`} colour={colour} variant="Filled" />
      ))}
      {STATUS_COLOURS.map((colour) => (
        <StatusBadge key={`${colour}-outlined`} colour={colour} variant="Outlined" />
      ))}
    </div>
  ),
}
