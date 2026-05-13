import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Plus } from "lucide-react"
import LinkButton from "@/components/ui/link-button"

const VARIANTS = ["Default", "Destructive"] as const
const SIZES = ["md", "sm"] as const

const meta: Meta<typeof LinkButton> = {
  title: "Components/Link Button",
  component: LinkButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["children", "variant", "size", "showLeftIcon", "showRightIcon", "disabled"],
    },
  },
  argTypes: {
    children: { control: "text" },
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
    showLeftIcon: { control: "boolean" },
    showRightIcon: { control: "boolean" },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
    className: { table: { disable: true } },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
  },
  args: {
    children: "Label",
    variant: "Default",
    size: "md",
    showLeftIcon: false,
    showRightIcon: true,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof LinkButton>

export const Default: Story = {}

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 gap-x-[var(--k-spacing-10)] gap-y-[var(--k-spacing-3)]">
      {VARIANTS.map((variant) =>
        SIZES.map((size) => (
          <LinkButton key={`${variant}-${size}`} variant={variant} size={size}>
            Label
          </LinkButton>
        ))
      )}
    </div>
  ),
}

export const WithIcons: Story = {
  parameters: {
    controls: { include: ["variant", "size"] },
  },
  args: {
    variant: "Default",
    size: "md",
  },
  render: ({ variant, size }) => (
    <div className="flex flex-wrap items-center gap-[var(--k-spacing-4)]">
      <LinkButton variant={variant} size={size} showLeftIcon leftIcon={<Plus aria-hidden="true" />}>
        Add item
      </LinkButton>
      <LinkButton variant={variant} size={size}>
        Continue
      </LinkButton>
      <LinkButton variant={variant} size={size} showLeftIcon showRightIcon={false}>
        Add
      </LinkButton>
    </div>
  ),
}
