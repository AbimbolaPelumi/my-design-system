import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import ButtonGroup, { type ButtonGroupComposition } from "@/components/ui/button-group"

const LAYOUTS = ["Inline", "Stacked"] as const
const COMPOSITIONS: ButtonGroupComposition[] = [
  "filled + tonal",
  "tonal + tonal",
  "filled + tonal + text",
  "tonal + text",
  "filled + text",
  "filled + destructive",
  "destructive + tonal",
]

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Button Group",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["layout", "composition"],
    },
  },
  argTypes: {
    layout: { control: "radio", options: LAYOUTS },
    composition: { control: "select", options: COMPOSITIONS },
    buttonCount: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    layout: "Inline",
    composition: "filled + tonal",
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {}

export const Inline: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col items-start gap-[var(--k-spacing-8)]">
      {COMPOSITIONS.map((composition) => (
        <ButtonGroup key={composition} layout="Inline" composition={composition} />
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
      {COMPOSITIONS.map((composition) => (
        <ButtonGroup key={composition} layout="Stacked" composition={composition} />
      ))}
    </div>
  ),
}
