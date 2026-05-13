import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Slider } from "@/components/ui/slider"

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["defaultValue", "value", "min", "max", "step", "disabled"],
    },
  },
  argTypes: {
    defaultValue: { control: "object" },
    value: { control: "object" },
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
    className: { table: { disable: true } },
  },
  args: {
    defaultValue: [30],
    min: 0,
    max: 100,
    step: 1,
  },
  decorators: [
    (Story) => (
      <div className="flex w-[383px] items-center justify-center p-[var(--k-spacing-6)]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {}

export const States: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-col gap-[var(--k-spacing-6)]">
      <Slider defaultValue={[50]} aria-label="Enabled slider" />
      <Slider defaultValue={[50]} aria-label="Disabled slider" disabled />
    </div>
  ),
}
