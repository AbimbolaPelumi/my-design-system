import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Divider } from "@/components/ui/divider"

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["half", "orientation", "decorative"],
    },
  },
  argTypes: {
    half: { control: "boolean" },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    decorative: { control: "boolean" },
    className: { table: { disable: true } },
  },
  args: {
    half: false,
    orientation: "horizontal",
    decorative: true,
  },
  decorators: [
    (Story) => (
      <div className="flex h-[160px] w-[343px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex w-[343px] flex-col gap-[var(--k-spacing-8)]">
      <Divider />
      <Divider half />
    </div>
  ),
}

export const Orientation: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid h-[160px] w-[343px] grid-cols-2 items-center gap-[var(--k-spacing-8)]">
      <Divider />
      <div className="flex h-full justify-center">
        <Divider orientation="vertical" />
      </div>
    </div>
  ),
}

export const ResponsiveHalf: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex w-[min(80vw,512px)] flex-col gap-[var(--k-spacing-6)]">
      <Divider half />
      <div className="w-1/2">
        <Divider half />
      </div>
    </div>
  ),
}
