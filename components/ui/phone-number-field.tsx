"use client"

import * as React from "react"
import { CheckCircle2, ChevronDown, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FieldValidation } from "@/components/ui/text-field"

export interface PhoneNumberFieldProps
  extends Omit<React.ComponentProps<"input">, "prefix" | "size" | "type"> {
  label?: React.ReactNode
  subLabel?: React.ReactNode
  supportingText?: React.ReactNode
  validation?: FieldValidation
  showInfoIcon?: boolean
  showSupportingContent?: boolean
  countryCode?: string
}

function NigeriaFlag() {
  return (
    <span aria-hidden="true" className="grid h-[16px] w-[24px] grid-cols-3 overflow-hidden">
      <span className="bg-[#1fa463]" />
      <span className="bg-white" />
      <span className="bg-[#1fa463]" />
    </span>
  )
}

function PhoneNumberField({
  id,
  label = "Phone Number",
  subLabel,
  supportingText,
  validation = "Default",
  showInfoIcon = false,
  showSupportingContent = false,
  countryCode = "+234",
  className,
  disabled,
  readOnly,
  placeholder = "800 000 0000",
  ...props
}: PhoneNumberFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const isError = validation === "Error"
  const isSuccess = validation === "Success"

  return (
    <div
      data-slot="phone-number-field"
      data-validation={validation}
      className={cn(
        "flex w-[335px] flex-col items-start gap-[var(--k-spacing-1)] font-sans",
        disabled && "opacity-[var(--k-opacity-50)]",
        className
      )}
    >
      <div className="flex w-full flex-col items-start gap-[var(--k-spacing-1-5)]">
        {label ? (
          <div className="flex w-full items-center gap-[var(--k-spacing-3)]">
            <label
              htmlFor={inputId}
              className="inline-flex shrink-0 items-center gap-[var(--k-spacing-0-5)] text-[length:var(--k-typography-size-sm)] font-normal leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-primary)]"
            >
              {label}
              {showInfoIcon ? (
                <Info aria-hidden="true" className="size-[14px] text-[var(--k-color-icon-secondary)]" />
              ) : null}
            </label>
            {subLabel ? (
              <span className="min-w-0 flex-1 text-right text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-secondary)]">
                {subLabel}
              </span>
            ) : null}
          </div>
        ) : null}

        <div
          data-slot="phone-number-field-input-wrap"
          className={cn(
            "group/phone-number-field-input relative flex h-[48px] max-h-[48px] min-h-[48px] w-full items-center overflow-hidden rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-primary)] transition-colors",
            "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-[2px] after:bg-transparent after:content-['']",
            "hover:bg-[var(--k-color-bg-secondary)] focus-within:rounded-b-none focus-within:bg-[var(--k-color-bg-secondary)] focus-within:after:bg-[var(--k-color-static-lavendar-default)]",
            readOnly && "bg-[var(--k-color-bg-secondary)] hover:bg-[var(--k-color-bg-secondary)]",
            isError && "rounded-b-none after:bg-[var(--k-color-icon-state-error-default)] focus-within:after:bg-[var(--k-color-icon-state-error-default)]",
            disabled && "pointer-events-none"
          )}
        >
          <button
            type="button"
            disabled={disabled || readOnly}
            aria-label="Select country"
            className="flex h-full w-[80px] shrink-0 items-center justify-center gap-[var(--k-spacing-2)] bg-[var(--k-color-bg-secondary)] text-[var(--k-color-icon-primary)] outline-none transition-colors group-hover/phone-number-field-input:bg-[var(--k-color-bg-tertiary)] group-focus-within/phone-number-field-input:bg-[var(--k-color-bg-tertiary)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--k-color-border-brand-primary-default)]"
          >
            <NigeriaFlag />
            <ChevronDown aria-hidden="true" className="size-4" />
          </button>

          <span className="flex h-full shrink-0 items-center px-[var(--k-spacing-3-5)] text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)]">
            {countryCode}
          </span>

          <input
            id={inputId}
            data-slot="phone-number-field-input"
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            type="tel"
            className="h-full min-w-0 flex-1 bg-transparent py-[var(--k-spacing-3)] pr-[var(--k-spacing-3-5)] text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)] outline-none placeholder:text-[var(--k-color-text-placeholder)]"
            {...props}
          />
        </div>
      </div>

      {showSupportingContent && supportingText ? (
        <div className="flex w-full items-center gap-[var(--k-spacing-1)]">
          {isSuccess ? (
            <CheckCircle2 aria-hidden="true" className="size-[14px] shrink-0 text-[var(--k-color-icon-state-success-default)]" />
          ) : null}
          <p
            className={cn(
              "min-w-0 flex-1 text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)]",
              isError
                ? "text-[var(--k-color-text-state-error-default)]"
                : isSuccess
                  ? "text-[var(--k-color-text-state-success-default)]"
                  : "text-[var(--k-color-text-secondary)]"
            )}
          >
            {supportingText}
          </p>
        </div>
      ) : null}
    </div>
  )
}

export { PhoneNumberField }
export default PhoneNumberField
