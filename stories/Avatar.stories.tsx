import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Avatar } from "@/components/ui/avatar"

const SAMPLE_IMAGE =
  "data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='160' height='160' rx='80' fill='%23DFD8CD'/%3E%3Ccircle cx='80' cy='62' r='28' fill='%231B161D'/%3E%3Cpath d='M32 142c5-31 25-48 48-48s43 17 48 48H32z' fill='%231B161D'/%3E%3Ccircle cx='70' cy='58' r='4' fill='%23FCF7F2'/%3E%3Ccircle cx='90' cy='58' r='4' fill='%23FCF7F2'/%3E%3Cpath d='M68 76c7 6 17 6 24 0' stroke='%23FCF7F2' stroke-width='5' stroke-linecap='round'/%3E%3C/svg%3E"

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: [
        "entity",
        "variant",
        "size",
        "initials",
        "src",
        "showTierBadge",
        "tierBadge",
        "showNotificationIndicator",
        "friendsOfKuda",
      ],
    },
  },
  argTypes: {
    entity: {
      control: "inline-radio",
      options: ["User", "Business"],
    },
    variant: {
      control: "inline-radio",
      options: ["Initial", "Image"],
    },
    size: {
      control: "select",
      options: ["2xl", "xl", "lg", "md", "sm"],
    },
    initials: { control: "text" },
    src: { control: "text" },
    showTierBadge: { control: "boolean" },
    tierBadge: { control: "text" },
    showNotificationIndicator: { control: "boolean" },
    friendsOfKuda: { control: "boolean" },
    className: { table: { disable: true } },
  },
  args: {
    entity: "User",
    variant: "Initial",
    size: "2xl",
    initials: "A",
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {}

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex items-center gap-[var(--k-spacing-5)]">
      {(["2xl", "xl", "lg", "md", "sm"] as const).map((size) => (
        <Avatar key={size} size={size} initials="A" />
      ))}
    </div>
  ),
}

export const Entities: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex items-center gap-[var(--k-spacing-8)]">
      <Avatar entity="User" initials="A" />
      <Avatar entity="Business" initials="A" />
    </div>
  ),
}

export const Images: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex items-center gap-[var(--k-spacing-8)]">
      <Avatar variant="Image" src={SAMPLE_IMAGE} alt="User avatar" />
      <Avatar entity="Business" variant="Image" src={SAMPLE_IMAGE} alt="Business avatar" />
    </div>
  ),
}

export const Indicators: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex items-center gap-[var(--k-spacing-8)]">
      <Avatar initials="A" showNotificationIndicator />
      <Avatar initials="A" showTierBadge tierBadge="1" />
      <Avatar initials="A" friendsOfKuda />
    </div>
  ),
}
