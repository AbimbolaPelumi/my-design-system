"use client"

import * as React from "react"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FieldValidation } from "@/components/ui/text-field"

export interface TextAreaProps
  extends Omit<React.ComponentProps<"textarea">, "size"> {
  label?: React.ReactNode
  supportingText?: React.ReactNode
  validation?: Exclude<FieldValidation, "Success">
  showInfoIcon?: boolean
  showSupportingText?: boolean
  showCounter?: boolean
  maxLength?: number
}

function TextArea({
  id,
  label = "Label",
  supportingText = "Message goes here",
  validation = "Default",
  showInfoIcon = false,
  showSupportingText = true,
  showCounter = true,
  maxLength = 150,
  className,
  disabled,
  readOnly,
  value,
  defaultValue,
  placeholder = "Placeholder label",
  ...props
}: TextAreaProps) {
  const generatedId = React.useId()
  const textareaId = id ?? generatedId
  const textValue = typeof value === "string" ? value : typeof defaultValue === "string" ? defaultValue : ""
  const isError = validation === "Error"

  return (
    <div
      data-slot="text-area"
      data-validation={validation}
      className={cn(
        "flex h-[142px] w-[335px] flex-col items-start gap-[var(--k-spacing-1)] font-sans",
        disabled && "opacity-[var(--k-opacity-50)]",
        className
      )}
    >
      <div className="flex min-h-0 w-full flex-1 flex-col items-start gap-[var(--k-spacing-1-5)]">
        <div className="flex w-full items-center gap-[var(--k-spacing-3)]">
          <label
            htmlFor={textareaId}
            className="inline-flex shrink-0 items-center gap-[var(--k-spacing-0-5)] text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-primary)]"
          >
            {label}
            {showInfoIcon ? <Info aria-hidden="true" className="size-[14px] text-[var(--k-color-icon-secondary)]" /> : null}
          </label>
          {showCounter ? (
            <span className="min-w-0 flex-1 text-right text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-secondary)]">
              {textValue.length}/{maxLength}
            </span>
          ) : null}
        </div>
        <textarea
          id={textareaId}
          data-slot="text-area-input"
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          placeholder={placeholder}
          className={cn(
            "min-h-0 w-full flex-1 resize-none rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-primary)] px-[var(--k-spacing-3-5)] py-[var(--k-spacing-3)] text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)] outline-none transition-colors placeholder:text-[var(--k-color-text-placeholder)]",
            "hover:bg-[var(--k-color-bg-secondary)] focus:rounded-b-none focus:bg-[var(--k-color-bg-secondary)] focus:shadow-[inset_0_-2px_0_0_var(--k-color-static-lavendar-default)]",
            readOnly && "bg-[var(--k-color-bg-secondary)] hover:bg-[var(--k-color-bg-secondary)]",
            isError && "rounded-b-none shadow-[inset_0_-2px_0_0_var(--k-color-border-state-error-default)] focus:shadow-[inset_0_-2px_0_0_var(--k-color-border-state-error-default)]"
          )}
          {...props}
        />
      </div>
      {showSupportingText ? (
        <p
          className={cn(
            "w-full text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)]",
            isError ? "text-[var(--k-color-text-state-error-default)]" : "text-[var(--k-color-text-secondary)]"
          )}
        >
          {supportingText}
        </p>
      ) : null}
    </div>
  )
}

export { TextArea }
export default TextArea
