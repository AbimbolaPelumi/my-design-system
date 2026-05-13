"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"
import { cn } from "../../lib/utils"

export interface DividerProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  half?: boolean
}

function Divider({
  className,
  orientation = "horizontal",
  decorative = true,
  half = false,
  ...props
}: DividerProps) {
  const isVertical = orientation === "vertical"

  return (
    <SeparatorPrimitive.Root
      data-slot="divider"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-[var(--k-color-border-primary)]",
        isVertical ? "min-h-full w-px" : "h-px w-full",
        half && (isVertical ? "my-[25%] min-h-0 h-1/2" : "mx-[25%] w-1/2"),
        className
      )}
      {...props}
    />
  )
}

export { Divider }
export default Divider
