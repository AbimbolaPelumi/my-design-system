import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  [
    "inline-flex min-w-[20px] items-center justify-center gap-[var(--k-spacing-0-5)] rounded-[var(--k-radius-sm)]",
    "font-sans text-[length:var(--k-typography-size-xs)] font-normal leading-[var(--k-typography-line-height-4)] tracking-[var(--k-typography-letter-spacing-normal)] text-[var(--k-color-static-black)]",
  ].join(" "),
  {
    variants: {
      colour: {
        Spearmint: "bg-[var(--k-color-bg-decorative-green)]",
        Purple: "bg-[var(--k-color-bg-decorative-purple)]",
        Pink: "bg-[var(--k-color-bg-decorative-pink)]",
        Orange: "bg-[var(--k-color-bg-decorative-red)]",
        Yellow: "bg-[var(--k-color-bg-decorative-yellow)]",
        Gray: "bg-[var(--k-color-bg-decorative-gray)]",
        Blue: "bg-[var(--k-color-bg-decorative-blue)]",
        Tertiary: "bg-[var(--k-color-bg-brand-tertiary-default)]",
      },
      size: {
        md: "px-[var(--k-spacing-1)] py-[var(--k-spacing-1-5)]",
        sm: "px-[var(--k-spacing-0-5)] py-[var(--k-spacing-1)]",
      },
    },
    defaultVariants: {
      colour: "Tertiary",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  colour = "Tertiary",
  size = "md",
  children = "LABEL",
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ colour, size }), className)}
      {...props}
    >
      <span data-slot="badge-text" className="px-[var(--k-spacing-1)]">
        {children}
      </span>
    </span>
  )
}

const counterBadgeVariants = cva(
  [
    "inline-flex h-[20px] min-w-[20px] items-center justify-center gap-[var(--k-spacing-0-5)] rounded-[var(--k-radius-sm)] px-[var(--k-spacing-1)] py-0",
    "font-sans text-[length:var(--k-typography-size-xs)] font-semibold leading-[var(--k-typography-line-height-4)] tracking-[var(--k-typography-letter-spacing-normal)] text-[var(--k-color-text-primary)]",
  ].join(" "),
  {
    variants: {
      variant: {
        Filled: "bg-[var(--k-color-bg-state-error-default)]",
        Light: "bg-[var(--k-color-bg-accent-red-lightest)]",
      },
    },
    defaultVariants: {
      variant: "Filled",
    },
  }
)

export interface CounterBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof counterBadgeVariants> {
  label?: React.ReactNode
}

function CounterBadge({
  className,
  variant = "Filled",
  label = "12",
  children,
  ...props
}: CounterBadgeProps) {
  return (
    <span
      data-slot="counter-badge"
      className={cn(counterBadgeVariants({ variant }), className)}
      {...props}
    >
      <span data-slot="counter-badge-text" className="px-[var(--k-spacing-1)]">
        {children ?? label}
      </span>
    </span>
  )
}

const statusBadgeVariants = cva(
  [
    "inline-flex max-h-[24px] min-h-[24px] min-w-[20px] w-[82px] items-center justify-center gap-[var(--k-spacing-0-5)] rounded-[var(--k-radius-sm)] px-[var(--k-spacing-1)] py-[var(--k-spacing-0-5)]",
    "font-sans text-[length:var(--k-typography-size-sm)] font-normal leading-[var(--k-typography-line-height-5)] tracking-[var(--k-typography-letter-spacing-normal)] text-[var(--k-color-static-black)]",
  ].join(" "),
  {
    variants: {
      colour: {
        "Red/Failed": "",
        "Green/Success": "",
        "Yellow/Pending": "",
        "Orange/Info": "",
      },
      variant: {
        Filled: "",
        Outlined: "",
      },
    },
    compoundVariants: [
      {
        colour: "Red/Failed",
        variant: "Filled",
        className: "bg-[var(--k-color-bg-state-error-default)]",
      },
      {
        colour: "Red/Failed",
        variant: "Outlined",
        className:
          "bg-[var(--k-color-bg-accent-red-lightest)] shadow-[inset_0_0_0_var(--k-stroke-width-0-5)_var(--k-color-border-accent-red-bolder)]",
      },
      {
        colour: "Green/Success",
        variant: "Filled",
        className: "bg-[var(--k-color-bg-state-success-default)]",
      },
      {
        colour: "Green/Success",
        variant: "Outlined",
        className:
          "bg-[var(--k-color-bg-accent-green-lightest)] shadow-[inset_0_0_0_var(--k-stroke-width-0-5)_var(--k-color-border-accent-green-default)]",
      },
      {
        colour: "Yellow/Pending",
        variant: "Filled",
        className: "bg-[var(--k-color-bg-state-info-default)]",
      },
      {
        colour: "Yellow/Pending",
        variant: "Outlined",
        className:
          "bg-[var(--k-color-bg-accent-yellow-lightest)] shadow-[inset_0_0_0_var(--k-stroke-width-0-5)_var(--k-color-border-accent-yellow-bolder)]",
      },
      {
        colour: "Orange/Info",
        variant: "Filled",
        className: "bg-[var(--k-color-bg-state-warning-default)]",
      },
      {
        colour: "Orange/Info",
        variant: "Outlined",
        className:
          "bg-[var(--k-color-bg-accent-orange-lightest)] shadow-[inset_0_0_0_var(--k-stroke-width-0-5)_var(--k-color-border-accent-orange-default)]",
      },
    ],
    defaultVariants: {
      colour: "Red/Failed",
      variant: "Filled",
    },
  }
)

export interface StatusBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof statusBadgeVariants> {
  label?: React.ReactNode
}

function StatusBadge({
  className,
  colour = "Red/Failed",
  variant = "Filled",
  label = "LABEL",
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      data-slot="status-badge"
      className={cn(statusBadgeVariants({ colour, variant }), className)}
      {...props}
    >
      <span data-slot="status-badge-text" className="px-[var(--k-spacing-0-5)]">
        {children ?? label}
      </span>
    </span>
  )
}

export {
  Badge,
  CounterBadge,
  StatusBadge,
  badgeVariants,
  counterBadgeVariants,
  statusBadgeVariants,
}
export default Badge
