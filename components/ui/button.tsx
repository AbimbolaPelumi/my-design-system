import * as React from "react"
import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "../../lib/utils"

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="9.5"
        stroke="currentColor"
        strokeWidth="3"
        opacity="0.25"
      />
      <path
        fill="currentColor"
        d="M12 2.5a9.5 9.5 0 0 1 9.5 9.5h-3A6.5 6.5 0 0 0 12 5.5V2.5z"
      />
    </svg>
  )
}

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center",
    "rounded-[4px] border border-transparent bg-clip-padding",
    "font-semibold whitespace-nowrap",
    "transition-colors outline-none select-none",
    "active:not-aria-[haspopup]:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-100",
    "focus-visible:border-transparent",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[var(--k-color-border-brand-primary-default)]",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        Filled: [
          "bg-[var(--k-color-button-bg-filled-default)]",
          "text-[var(--k-color-text-on-brand-default)]",
          "hover:bg-[var(--k-color-button-bg-filled-hovered)]",
          "disabled:bg-[var(--k-color-button-bg-filled-disabled)]",
          "disabled:text-[var(--k-color-text-on-brand-disabled)]",
        ].join(" "),
        Tonal: [
          "bg-[var(--k-color-button-bg-tonal-default)]",
          "text-[var(--k-color-text-brand-primary-default)]",
          "hover:bg-[var(--k-color-button-bg-tonal-hovered)]",
          "disabled:bg-[var(--k-color-button-bg-tonal-disabled)]",
          "disabled:text-[var(--k-color-text-brand-primary-disabled)]",
        ].join(" "),
        Outlined: [
          "bg-[var(--k-color-button-bg-outlined-default)]",
          "border-[var(--k-color-border-brand-primary-default)]",
          "text-[var(--k-color-text-brand-primary-default)]",
          "hover:bg-[var(--k-color-button-bg-outlined-hovered)]",
          "disabled:border-[var(--k-color-border-brand-primary-disabled)]",
          "disabled:bg-[var(--k-color-button-bg-outlined-default)]",
          "disabled:text-[var(--k-color-text-brand-primary-disabled)]",
        ].join(" "),
        Text: [
          "bg-transparent border-transparent",
          "text-[var(--k-color-text-brand-primary-default)]",
          "hover:bg-[var(--k-color-button-bg-outlined-hovered)]",
          "disabled:bg-transparent",
          "disabled:text-[var(--k-color-text-brand-primary-disabled)]",
        ].join(" "),
      },
      size: {
        lg: "gap-1 px-6 py-3.5 text-base leading-6 [&_svg:not([class*='size-'])]:size-6",
        md: "gap-1 px-5 py-3 text-base leading-6 [&_svg:not([class*='size-'])]:size-6",
        sm: "gap-1 px-4 py-2 text-sm leading-5 [&_svg:not([class*='size-'])]:size-5",
        xs: "gap-0.5 px-2 py-1.5 text-xs leading-4 [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "Filled",
      size: "lg",
    },
  }
)

const destructiveClass = [
  "bg-[var(--k-color-button-bg-destructive-default)]",
  "text-[var(--k-color-text-on-solid-default)]",
  "hover:bg-[var(--k-color-button-bg-destructive-hovered)]",
  "disabled:bg-[var(--k-color-button-bg-destructive-disabled)]",
  "disabled:text-[var(--k-color-text-on-solid-disabled)]",
].join(" ")

const destructiveTextClass = [
  "bg-transparent",
  "text-[var(--k-color-text-state-error-default)]",
  "hover:bg-[var(--k-color-bg-accent-red-lightest)]",
  "hover:text-[var(--k-color-text-state-error-hover)]",
  "disabled:bg-transparent",
  "disabled:text-[var(--k-color-text-state-error-disabled)]",
].join(" ")

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "Filled" | "Tonal" | "Outlined" | "Text"
  size?: "lg" | "md" | "sm" | "xs"
  isDestructive?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  asChild?: boolean
}

function Button({
  variant = "Filled",
  size = "lg",
  isDestructive = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"
  const spinnerSize =
    size === "lg" || size === "md" ? "size-6" : size === "sm" ? "size-5" : "size-4"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({ variant, size }),
        variant === "Filled" && isDestructive && destructiveClass,
        variant === "Text" && isDestructive && destructiveTextClass,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner className={spinnerSize} />
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
export default Button
