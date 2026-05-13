"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface PinInputProps
  extends Omit<React.ComponentProps<"input">, "type" | "size" | "value" | "onChange"> {
  label?: React.ReactNode
  length?: 4 | 5 | 6
  masked?: boolean
  value?: string
  defaultValue?: string
  error?: boolean
  supportingText?: React.ReactNode
  onValueChange?: (value: string) => void
}

function PinInput({
  label = "Label",
  length = 4,
  masked = true,
  value,
  defaultValue = "",
  error = false,
  supportingText = "Message goes here",
  onValueChange,
  className,
  ...props
}: PinInputProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const actualValue = value ?? internalValue
  const activeIndex = Math.min(actualValue.length, length - 1)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = event.target.value.replace(/\D/g, "").slice(0, length)
    if (value === undefined) {
      setInternalValue(next)
    }
    onValueChange?.(next)
  }

  return (
    <div
      data-slot="pin-input"
      data-error={error}
      className={cn("relative flex flex-col items-center gap-[var(--k-spacing-1-5)] font-sans", className)}
      onClick={() => inputRef.current?.focus()}
    >
      {label ? (
        <p className="w-full text-center text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)]">
          {label}
        </p>
      ) : null}
      <div className="flex w-full justify-center gap-[var(--k-spacing-1-5)]">
        {Array.from({ length }).map((_, index) => {
          const char = actualValue[index]
          const isFilled = Boolean(char)
          const isActive = index === activeIndex && actualValue.length < length

          return (
            <span
              key={index}
              data-slot="pin-input-cell"
              className={cn(
                "flex size-[48px] shrink-0 items-center justify-center rounded-[var(--k-radius-default)] px-[var(--k-spacing-3-5)] py-[var(--k-spacing-3)] text-center text-[length:var(--k-typography-size-md)] font-semibold leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)]",
                error
                  ? "bg-[var(--k-color-bg-accent-red-lightest)]"
                  : isFilled
                    ? "bg-[var(--k-color-bg-brand-secondary-default)]"
                    : "bg-[var(--k-color-bg-primary)]"
              )}
            >
              {isFilled ? (
                masked ? <span className="size-[10px] rounded-[var(--k-radius-full)] bg-[var(--k-color-static-black)]" /> : char
              ) : isActive ? (
                <span className="h-[24px] w-px bg-[var(--k-color-icon-brand-primary-default)]" />
              ) : null}
            </span>
          )
        })}
      </div>
      <input
        ref={inputRef}
        aria-label={typeof label === "string" ? label : "PIN"}
        inputMode="numeric"
        pattern="[0-9]*"
        value={actualValue}
        onChange={handleChange}
        className="sr-only"
        {...props}
      />
      {error ? (
        <p className="w-full text-center text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-state-error-default)]">
          {supportingText}
        </p>
      ) : null}
    </div>
  )
}

export { PinInput }
export default PinInput
