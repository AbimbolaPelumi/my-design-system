"use client"

import * as React from "react"
import Checkbox, { type CheckboxProps } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export interface CheckboxFieldProps
  extends Omit<CheckboxProps, "children" | "className"> {
  label: React.ReactNode
  variant?: "Bounded" | "Unbounded"
  className?: string
  checkboxClassName?: string
}

function CheckboxField({
  id,
  label,
  variant = "Bounded",
  className,
  checkboxClassName,
  disabled,
  ...props
}: CheckboxFieldProps) {
  const generatedId = React.useId()
  const checkboxId = id ?? generatedId

  return (
    <label
      data-slot="checkbox-field"
      data-variant={variant}
      htmlFor={checkboxId}
      className={cn(
        "flex cursor-pointer gap-[var(--k-spacing-2)] rounded-[var(--k-radius-default)] text-[var(--k-color-text-primary)]",
        "has-[:disabled]:cursor-not-allowed",
        variant === "Bounded" &&
          "w-[343px] items-start bg-[var(--k-color-bg-primary)] p-[var(--k-spacing-3-5)] hover:bg-[var(--k-color-bg-secondary)]",
        variant === "Unbounded" && "items-center px-0 py-[var(--k-spacing-1)]",
        className
      )}
    >
      <span className="flex h-[var(--k-spacing-6)] w-[var(--k-spacing-6)] shrink-0 items-center justify-center">
        <Checkbox
          id={checkboxId}
          disabled={disabled}
          className={checkboxClassName}
          {...props}
        />
      </span>
      <span
        data-slot="checkbox-field-label"
        className={cn(
          "flex min-w-0 flex-col justify-center font-sans text-[length:var(--k-typography-size-md)] font-normal leading-[var(--k-typography-line-height-6)] tracking-[var(--k-typography-letter-spacing-normal)]",
          variant === "Bounded" && "w-[287px] shrink-0",
          variant === "Unbounded" && "whitespace-nowrap"
        )}
      >
        {label}
      </span>
    </label>
  )
}

export { CheckboxField }
export default CheckboxField
