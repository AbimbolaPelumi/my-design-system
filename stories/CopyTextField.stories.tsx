import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import CopyTextField from "@/components/ui/copy-text-field"

const meta: Meta<typeof CopyTextField> = {
  title: "Components/Copy Text Field",
  component: CopyTextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["label", "description", "copyLabel"],
    },
  },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    copyLabel: { control: "text" },
    onCopy: { table: { disable: true } },
    className: { table: { disable: true } },
  },
  args: {
    label: "Label",
    description: "Description",
    copyLabel: "COPY",
  },
}

export default meta
type Story = StoryObj<typeof CopyTextField>

export const Default: Story = {}
