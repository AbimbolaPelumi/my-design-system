"use client"

import * as React from "react"
import { Check, Minus } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.ComponentProps<typeof CheckboxPrimitive.Root>, "children"> {}

function Checkbox({ className, checked, defaultChecked, ...props }: CheckboxProps) {
  const isIndeterminate = checked === "indeterminate" || defaultChecked === "indeterminate"

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      checked={checked}
      defaultChecked={defaultChecked}
      className={cn(
        "peer inline-flex h-[18px] w-[18px] shrink-0 cursor-pointer items-center justify-center rounded-[var(--k-radius-sm)] border-[1.5px] border-[var(--k-color-icon-secondary)] bg-transparent outline-none transition-colors",
        "data-[state=checked]:border-transparent data-[state=checked]:bg-[var(--k-color-static-lavendar-default)]",
        "data-[state=indeterminate]:border-transparent data-[state=indeterminate]:bg-[var(--k-color-static-lavendar-default)]",
        "disabled:cursor-not-allowed disabled:border-[var(--k-color-icon-disabled)]",
        "data-[state=checked]:disabled:bg-[var(--k-color-icon-disabled)]",
        "data-[state=indeterminate]:disabled:bg-[var(--k-color-icon-disabled)]",
        "focus-visible:ring-2 focus-visible:ring-[var(--k-color-border-brand-primary-default)] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-[var(--k-color-static-white)]"
      >
        {isIndeterminate ? (
          <Minus aria-hidden="true" className="h-0.5 w-3 stroke-[3px]" />
        ) : (
          <Check aria-hidden="true" className="h-[9.75px] w-[12.875px] stroke-[3px]" />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
export default Checkbox
