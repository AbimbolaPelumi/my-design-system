"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

export type TooltipTipPosition =
  | "Top Right"
  | "Top Center"
  | "Top Left"
  | "Bottom Left"
  | "Bottom Center"
  | "Bottom Right"

const tipAlignment: Record<TooltipTipPosition, "start" | "center" | "end"> = {
  "Top Left": "start",
  "Top Center": "center",
  "Top Right": "end",
  "Bottom Left": "start",
  "Bottom Center": "center",
  "Bottom Right": "end",
}

const tipSide: Record<TooltipTipPosition, "top" | "bottom"> = {
  "Top Left": "bottom",
  "Top Center": "bottom",
  "Top Right": "bottom",
  "Bottom Left": "top",
  "Bottom Center": "top",
  "Bottom Right": "top",
}

export interface TooltipProps
  extends Omit<React.ComponentProps<typeof TooltipPrimitive.Content>, "content"> {
  content: React.ReactNode
  children: React.ReactNode
  tipPosition?: TooltipTipPosition
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function Tooltip({
  content,
  children,
  tipPosition = "Top Right",
  open,
  defaultOpen,
  onOpenChange,
  className,
  sideOffset = 9,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={150}>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            data-slot="tooltip"
            side={tipSide[tipPosition]}
            align={tipAlignment[tipPosition]}
            sideOffset={sideOffset}
            className={cn(
              "z-50 max-w-[250px] rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-accent-softblack-default)] p-[var(--k-spacing-2)] font-sans text-[length:var(--k-typography-size-xs)] font-normal leading-[var(--k-typography-line-height-4)] tracking-[var(--k-typography-letter-spacing-normal)] text-[var(--k-color-text-inverted)]",
              className
            )}
            {...props}
          >
            {content}
            <TooltipPrimitive.Arrow
              data-slot="tooltip-arrow"
              width={11}
              height={11}
              className="fill-[var(--k-color-bg-accent-softblack-default)]"
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

const TooltipProvider = TooltipPrimitive.Provider
const TooltipRoot = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipContent = TooltipPrimitive.Content

export {
  Tooltip,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
}
export default Tooltip
