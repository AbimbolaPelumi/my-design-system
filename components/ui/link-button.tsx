"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { ChevronRight, Plus } from "lucide-react"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const linkButtonVariants = cva(
  [
    "inline-flex shrink-0 items-center gap-[2px] font-sans font-semibold",
    "whitespace-nowrap underline-offset-2 transition-colors outline-none",
    "hover:underline disabled:pointer-events-none disabled:opacity-[var(--k-opacity-50)]",
    "focus-visible:rounded-[var(--k-radius-default)] focus-visible:ring-2",
    "focus-visible:ring-[var(--k-color-border-brand-primary-default)] focus-visible:ring-offset-2",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        Default: "text-[var(--k-color-text-brand-primary-default)]",
        Destructive: "text-[var(--k-color-text-state-error-default)]",
      },
      size: {
        md: "text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] [&_svg:not([class*='size-'])]:size-5",
        sm: "text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      variant: "Default",
      size: "md",
    },
  }
)

export interface LinkButtonProps extends React.ComponentProps<"button"> {
  variant?: "Default" | "Destructive"
  size?: "md" | "sm"
  showLeftIcon?: boolean
  showRightIcon?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  asChild?: boolean
}

function LinkButton({
  variant = "Default",
  size = "md",
  showLeftIcon = false,
  showRightIcon = true,
  leftIcon,
  rightIcon,
  asChild = false,
  className,
  children = "Label",
  type = "button",
  ...props
}: LinkButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="link-button"
      data-variant={variant}
      data-size={size}
      className={cn(linkButtonVariants({ variant, size }), className)}
      {...(!asChild ? { type } : {})}
      {...props}
    >
      {showLeftIcon ? leftIcon ?? <Plus aria-hidden="true" /> : null}
      <span data-slot="link-button-label">{children}</span>
      {showRightIcon ? rightIcon ?? <ChevronRight aria-hidden="true" /> : null}
    </Comp>
  )
}

export { LinkButton, linkButtonVariants }
export default LinkButton
