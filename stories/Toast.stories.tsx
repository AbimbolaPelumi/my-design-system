import type { Meta, StoryObj } from "@storybook/react"
import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast"

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      include: ["state", "breakpoint", "text", "cta", "withCta", "open"],
    },
  },
  argTypes: {
    state: {
      control: "inline-radio",
      options: ["Default", "Error", "Inverted"],
    },
    breakpoint: {
      control: "inline-radio",
      options: ["Desktop", "Mobile"],
    },
    text: { control: "text" },
    cta: { control: "text" },
    withCta: { control: "boolean" },
    open: { control: "boolean" },
    className: { table: { disable: true } },
  },
  args: {
    state: "Default",
    breakpoint: "Desktop",
    text: "Message goes here",
    cta: "Action",
    withCta: true,
    open: true,
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  render: (args) => (
    <ToastProvider>
      <Toast {...args} />
      <ToastViewport className="!static !bottom-auto !right-auto !max-h-none min-h-[96px] w-full items-center justify-center p-[var(--k-spacing-6)]" />
    </ToastProvider>
  ),
}

export const Desktop: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <ToastProvider duration={Infinity}>
      {(["Default", "Error", "Inverted"] as const).map((state) => (
        <Toast key={`${state}-cta`} open state={state} breakpoint="Desktop" withCta />
      ))}
      {(["Default", "Error", "Inverted"] as const).map((state) => (
        <Toast key={`${state}-no-cta`} open state={state} breakpoint="Desktop" withCta={false} />
      ))}
      <ToastViewport className="!static !bottom-auto !right-auto !grid !max-h-none grid-cols-2 gap-x-[var(--k-spacing-10)] gap-y-[var(--k-spacing-3)] p-[var(--k-spacing-6)]" />
    </ToastProvider>
  ),
}

export const Mobile: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <ToastProvider duration={Infinity}>
      {(["Default", "Error", "Inverted"] as const).map((state) => (
        <Toast key={`${state}-cta`} open state={state} breakpoint="Mobile" withCta />
      ))}
      {(["Default", "Error", "Inverted"] as const).map((state) => (
        <Toast key={`${state}-no-cta`} open state={state} breakpoint="Mobile" withCta={false} />
      ))}
      <ToastViewport className="!static !bottom-auto !right-auto !grid !max-h-none grid-cols-2 gap-x-[var(--k-spacing-10)] gap-y-[var(--k-spacing-3)] p-[var(--k-spacing-6)]" />
    </ToastProvider>
  ),
}
