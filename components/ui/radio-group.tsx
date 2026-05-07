"use client"

import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

export interface RadioButtonProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {}

function RadioButton({ className, ...props }: RadioButtonProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-button"
      className={cn(
        "peer group inline-flex h-[var(--k-spacing-6)] w-[var(--k-spacing-6)] shrink-0 cursor-pointer items-center justify-center rounded-[var(--k-radius-full)] outline-none",
        "disabled:cursor-not-allowed disabled:opacity-[var(--k-opacity-40)]",
        "focus-visible:ring-2 focus-visible:ring-[var(--k-color-border-brand-primary-default)] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="radio-button-circle"
        aria-hidden="true"
        className={cn(
          "flex h-[18px] w-[18px] items-center justify-center rounded-[var(--k-radius-full)] border border-[var(--k-color-icon-secondary)] bg-transparent transition-colors",
          "group-data-[state=checked]:border-transparent group-data-[state=checked]:bg-[var(--k-color-static-lavendar-default)]",
          "group-disabled:border-[var(--k-color-border-primary)] group-data-[state=checked]:group-disabled:border-transparent"
        )}
      >
        <RadioGroupPrimitive.Indicator
          data-slot="radio-button-indicator"
          className="h-[var(--k-spacing-2)] w-[var(--k-spacing-2)] rounded-[var(--k-radius-full)] bg-[var(--k-color-static-white)]"
        />
      </span>
    </RadioGroupPrimitive.Item>
  )
}

export interface RadioFieldProps
  extends Omit<RadioButtonProps, "children" | "className"> {
  label: React.ReactNode
  showRadio?: boolean
  showPromoBadge?: boolean
  promoLabel?: React.ReactNode
  className?: string
  radioClassName?: string
}

function RadioField({
  id,
  label,
  showRadio = false,
  showPromoBadge = false,
  promoLabel = "Additional Text",
  className,
  radioClassName,
  disabled,
  ...props
}: RadioFieldProps) {
  const generatedId = React.useId()
  const radioId = id ?? generatedId

  return (
    <label
      data-slot="radio-field"
      htmlFor={radioId}
      className={cn(
        "flex w-[124px] cursor-pointer flex-col items-start overflow-hidden rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-primary)] text-[var(--k-color-text-primary)]",
        "has-[[data-state=checked]]:bg-[var(--k-color-bg-brand-secondary-default)] has-[[data-state=checked]]:shadow-[inset_0_0_0_1px_var(--k-color-static-lavendar-default)]",
        "has-[:disabled]:cursor-not-allowed",
        className
      )}
    >
      <span className="flex w-full items-start gap-[6px] p-[var(--k-spacing-3)]">
        {showRadio ? (
          <RadioButton
            id={radioId}
            disabled={disabled}
            className={radioClassName}
            {...props}
          />
        ) : (
          <RadioGroupPrimitive.Item
            id={radioId}
            data-slot="radio-field-hidden-input"
            disabled={disabled}
            className="sr-only"
            {...props}
          />
        )}
        <span className="flex min-w-0 flex-1 items-center justify-center px-[var(--k-spacing-1)] font-sans text-[length:var(--k-typography-size-md)] font-normal leading-[var(--k-typography-line-height-6)] tracking-[var(--k-typography-letter-spacing-normal)]">
          <span
            data-slot="radio-field-label"
            className={cn(
              "w-full",
              showRadio ? "text-left" : "text-center"
            )}
          >
            {label}
          </span>
        </span>
      </span>
      {showPromoBadge ? (
        <span className="flex w-full items-center justify-center bg-[var(--k-color-bg-decorative-purple)] p-[var(--k-spacing-1)] text-center font-sans text-[length:var(--k-typography-size-2xs)] font-normal leading-[var(--k-typography-line-height-4)] tracking-[var(--k-typography-letter-spacing-normal)] text-[var(--k-color-static-black)]">
          {promoLabel}
        </span>
      ) : null}
    </label>
  )
}

export interface RadioGroupOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
  showPromoBadge?: boolean
  promoLabel?: React.ReactNode
}

export interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  label?: React.ReactNode
  showLabel?: boolean
  type?: "Inline" | "Stacked"
  options?: RadioGroupOption[]
  showRadio?: boolean
}

function RadioGroup({
  label = "Label",
  showLabel = true,
  type = "Inline",
  options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ],
  showRadio = false,
  className,
  children,
  ...props
}: RadioGroupProps) {
  const count = options.length
  const inlineColumns =
    count === 8 ? 4 : count >= 5 ? 3 : count === 4 ? 2 : count >= 3 ? 3 : 2
  const hasCustomChildren = React.Children.count(children) > 0

  return (
    <div data-slot="radio-group-wrapper" className="flex w-[512px] flex-col items-start gap-[var(--k-spacing-1-5)]">
      {showLabel ? (
        <p className="w-full font-sans text-[length:var(--k-typography-size-sm)] font-normal leading-[var(--k-typography-line-height-5)] tracking-[var(--k-typography-letter-spacing-normal)] text-[var(--k-color-text-primary)]">
          {label}
        </p>
      ) : null}
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={
          hasCustomChildren
            ? cn(className)
            : cn(
                "w-full gap-[var(--k-spacing-2)]",
                type === "Stacked" && "flex flex-col items-start",
                type === "Inline" && "grid",
                className
              )
        }
        style={
          !hasCustomChildren && type === "Inline"
            ? { gridTemplateColumns: `repeat(${inlineColumns}, minmax(0, 1fr))` }
            : undefined
        }
        {...props}
      >
        {children ??
          options.map((option) => (
            <RadioField
              key={option.value}
              value={option.value}
              label={option.label}
              disabled={option.disabled}
              showRadio={showRadio}
              showPromoBadge={option.showPromoBadge}
              promoLabel={option.promoLabel}
              className={type === "Stacked" ? "w-full" : "w-full"}
            />
          ))}
      </RadioGroupPrimitive.Root>
    </div>
  )
}

export { RadioButton, RadioField, RadioGroup }
export default RadioGroup
