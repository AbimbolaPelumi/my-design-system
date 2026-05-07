"use client"

import * as React from "react"
import { Switch } from "radix-ui"
import { cn } from "@/lib/utils"

export interface ToggleProps
  extends Omit<React.ComponentProps<typeof Switch.Root>, "children"> {
}

function Toggle({
  className,
  checked,
  defaultChecked,
  disabled,
  ...props
}: ToggleProps) {
  return (
    <Switch.Root
      data-slot="toggle"
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      className={cn(
        "group relative inline-flex h-[var(--k-spacing-7)] w-[calc(var(--k-spacing-10)+var(--k-spacing-0-5))] shrink-0 cursor-pointer overflow-hidden rounded-[var(--k-radius-full)] outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:ring-2 focus-visible:ring-[var(--k-color-border-brand-primary-default)] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="toggle-track"
        aria-hidden="true"
        className={cn(
          "absolute inset-[10%_3.33%] rounded-[var(--k-radius-full)] bg-[var(--k-color-bg-tertiary)] transition-colors",
          "group-hover:bg-[var(--k-color-bg-secondary)]",
          "group-data-[state=checked]:bg-[var(--k-color-static-lavendar-default)]",
          "group-data-[state=checked]:group-hover:bg-[var(--k-lavender-400)]"
        )}
      />
      <Switch.Thumb
        data-slot="toggle-thumb"
        className={cn(
          "absolute left-[calc(3.33%+var(--k-spacing-0-5))] top-1/2 size-[var(--k-spacing-5)] -translate-y-1/2 rounded-[var(--k-radius-full)] bg-[var(--k-color-static-white)] transition-[left,right]",
          "group-data-[state=checked]:left-auto group-data-[state=checked]:right-[calc(3.33%+var(--k-spacing-0-5))]"
        )}
      />
    </Switch.Root>
  )
}

export { Toggle }
export default Toggle
