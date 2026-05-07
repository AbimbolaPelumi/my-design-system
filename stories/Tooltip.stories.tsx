import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"

const TOOLTIP_TEXT =
  "This is short text. It's advisable that the text does not span more than 2 lines."

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["content", "tipPosition"],
    },
  },
  argTypes: {
    content: { control: "text" },
    tipPosition: {
      control: "select",
      options: [
        "Top Right",
        "Top Center",
        "Top Left",
        "Bottom Left",
        "Bottom Center",
        "Bottom Right",
      ],
    },
    className: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  args: {
    content: TOOLTIP_TEXT,
    tipPosition: "Top Right",
  },
  decorators: [
    (Story) => (
      <div className="flex h-[240px] w-[420px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <Button size="sm">Hover me</Button>
    </Tooltip>
  ),
}

export const Positions: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-3 gap-x-[var(--k-spacing-8)] gap-y-[var(--k-spacing-12)]">
      {(
        [
          "Top Left",
          "Top Center",
          "Top Right",
          "Bottom Left",
          "Bottom Center",
          "Bottom Right",
        ] as const
      ).map((tipPosition) => (
        <Tooltip key={tipPosition} content={TOOLTIP_TEXT} tipPosition={tipPosition} defaultOpen>
          <Button size="sm">{tipPosition}</Button>
        </Tooltip>
      ))}
    </div>
  ),
}
