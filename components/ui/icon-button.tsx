"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center rounded-[var(--k-radius-default)] p-[var(--k-spacing-2)]",
    "text-[var(--k-color-icon-primary)] transition-colors outline-none",
    "disabled:pointer-events-none disabled:opacity-[var(--k-opacity-50)]",
    "focus-visible:ring-2 focus-visible:ring-[var(--k-color-border-brand-primary-default)] focus-visible:ring-offset-2",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      fill: {
        Solid:
          "bg-[var(--k-color-bg-primary)] hover:bg-[var(--k-color-bg-secondary)]",
        Transparent:
          "bg-[var(--k-color-bg-transparent-default)] hover:bg-[var(--k-color-bg-transparent-hovered)]",
      },
      size: {
        sm: "[&_svg:not([class*='size-'])]:size-6",
        xs: "[&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      fill: "Solid",
      size: "sm",
    },
  }
)

export interface IconButtonProps extends React.ComponentProps<"button"> {
  fill?: "Solid" | "Transparent"
  size?: "sm" | "xs"
  icon?: React.ReactNode
}

function IconButton({
  fill = "Solid",
  size = "sm",
  icon,
  className,
  type = "button",
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      data-slot="icon-button"
      data-fill={fill}
      data-size={size}
      type={type}
      className={cn(iconButtonVariants({ fill, size }), className)}
      {...props}
    >
      {icon ?? children ?? <ChevronLeft aria-hidden="true" />}
    </button>
  )
}

export { IconButton, iconButtonVariants }
export default IconButton
