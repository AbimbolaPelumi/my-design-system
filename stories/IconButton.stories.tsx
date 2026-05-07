import type { Meta, StoryObj } from "@storybook/react"
import { ChevronLeft, X } from "lucide-react"
import IconButton from "@/components/ui/icon-button"

const FILLS = ["Solid", "Transparent"] as const
const SIZES = ["sm", "xs"] as const

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon Button",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["fill", "size", "disabled"],
    },
  },
  argTypes: {
    fill: { control: "select", options: FILLS },
    size: { control: "select", options: SIZES },
    disabled: { control: "boolean" },
    icon: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    fill: "Solid",
    size: "sm",
    "aria-label": "Go back",
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    backgrounds: { default: "dark" },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-[var(--k-spacing-4)] rounded-[var(--k-radius-default)] bg-[var(--k-color-static-black)] p-[var(--k-spacing-5)]">
      {FILLS.map((fill) =>
        SIZES.map((size) => (
          <IconButton key={`${fill}-${size}`} fill={fill} size={size} aria-label={`${fill} ${size}`}>
            <ChevronLeft aria-hidden="true" />
          </IconButton>
        ))
      )}
    </div>
  ),
}

export const CustomIcon: Story = {
  args: {
    icon: <X aria-hidden="true" />,
    "aria-label": "Close",
  },
}
