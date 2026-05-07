"use client"

import * as React from "react"
import { Check, ChevronDown, Info } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

export interface SelectOption {
  label: string
  value: string
  icon?: React.ReactNode
}

export interface SelectProps
  extends Omit<React.ComponentProps<typeof SelectPrimitive.Root>, "children"> {
  label?: React.ReactNode
  subLabel?: React.ReactNode
  supportingText?: React.ReactNode
  placeholder?: string
  showInfoIcon?: boolean
  showSupportingContent?: boolean
  options?: SelectOption[]
  className?: string
  triggerClassName?: string
}

const defaultOptions: SelectOption[] = [
  { label: "Option one", value: "one" },
  { label: "Option two", value: "two" },
  { label: "Option three", value: "three" },
]

function Select({
  label = "Label",
  subLabel,
  supportingText = "Message goes here",
  placeholder = "Placeholder label",
  showInfoIcon = false,
  showSupportingContent = false,
  options = defaultOptions,
  disabled,
  className,
  triggerClassName,
  ...props
}: SelectProps) {
  const labelId = React.useId()

  return (
    <div
      data-slot="select-field"
      className={cn(
        "flex w-[335px] flex-col items-start gap-[var(--k-spacing-1-5)] font-sans",
        disabled && "opacity-[var(--k-opacity-50)]",
        className
      )}
    >
      {label ? (
        <div className="flex w-full items-center gap-[var(--k-spacing-3)]">
          <span
            id={labelId}
            className="inline-flex shrink-0 items-center gap-[var(--k-spacing-0-5)] text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-primary)]"
          >
            {label}
            {showInfoIcon ? <Info aria-hidden="true" className="size-[14px] text-[var(--k-color-icon-secondary)]" /> : null}
          </span>
          {subLabel ? (
            <span className="min-w-0 flex-1 text-right text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-secondary)]">
              {subLabel}
            </span>
          ) : null}
        </div>
      ) : null}
      <SelectPrimitive.Root disabled={disabled} {...props}>
        <SelectPrimitive.Trigger
          aria-labelledby={label ? labelId : undefined}
          data-slot="select-trigger"
          className={cn(
            "relative flex h-[48px] max-h-[48px] min-h-[48px] w-full items-center gap-[var(--k-spacing-2)] overflow-hidden rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-primary)] px-[var(--k-spacing-3-5)] py-[var(--k-spacing-3)] text-left text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)] outline-none transition-colors",
            "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-transparent after:content-['']",
            "hover:bg-[var(--k-color-bg-secondary)] data-[state=open]:rounded-b-none data-[state=open]:bg-[var(--k-color-bg-secondary)] data-[state=open]:after:bg-[var(--k-color-static-lavendar-default)]",
            triggerClassName
          )}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDown aria-hidden="true" className="ml-auto size-5 shrink-0 text-[var(--k-color-icon-primary)]" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            data-slot="select-content"
            position="popper"
            sideOffset={4}
            className="z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-primary)] p-[var(--k-spacing-1)] font-sans shadow-lg"
          >
            <SelectPrimitive.Viewport>
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  data-slot="select-item"
                  className="flex h-[40px] cursor-pointer items-center gap-[var(--k-spacing-2)] rounded-[var(--k-radius-default)] px-[var(--k-spacing-2)] text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-primary)] outline-none data-[highlighted]:bg-[var(--k-color-bg-secondary)]"
                >
                  {option.icon}
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="ml-auto">
                    <Check aria-hidden="true" className="size-4 text-[var(--k-color-icon-brand-primary-default)]" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {showSupportingContent ? (
        <p className="w-full text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-secondary)]">
          {supportingText}
        </p>
      ) : null}
    </div>
  )
}

export { Select }
export default Select
