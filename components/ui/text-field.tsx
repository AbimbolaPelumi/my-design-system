"use client"

import * as React from "react"
import { CheckCircle2, Clipboard, EyeOff, Info } from "lucide-react"
import LinkButton from "./link-button"
import { cn } from "../../lib/utils"

export type FieldValidation = "Default" | "Error" | "Success"

export interface TextFieldProps
  extends Omit<React.ComponentProps<"input">, "prefix" | "size"> {
  label?: React.ReactNode
  subLabel?: React.ReactNode
  supportingText?: React.ReactNode
  validation?: FieldValidation
  showInfoIcon?: boolean
  showSupportingContent?: boolean
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  action?: React.ReactNode
  rightIcon?: React.ReactNode
}

function TextField({
  id,
  label = "Label",
  subLabel,
  supportingText = "Message goes here",
  validation = "Default",
  showInfoIcon = false,
  showSupportingContent = true,
  prefix,
  suffix,
  action,
  rightIcon,
  className,
  disabled,
  readOnly,
  placeholder = "Placeholder label",
  ...props
}: TextFieldProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const hasChrome = Boolean(prefix || suffix)
  const isError = validation === "Error"
  const isSuccess = validation === "Success"

  return (
    <div
      data-slot="text-field"
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
          data-slot="text-field-input-wrap"
          className={cn(
            "group/text-field-input relative flex h-[48px] max-h-[48px] min-h-[48px] w-full items-center overflow-hidden rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-primary)] transition-colors",
            "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-[2px] after:bg-transparent after:content-['']",
            "hover:bg-[var(--k-color-bg-secondary)] focus-within:rounded-b-none focus-within:bg-[var(--k-color-bg-secondary)] focus-within:after:bg-[var(--k-color-static-lavendar-default)]",
            readOnly && "bg-[var(--k-color-bg-secondary)] hover:bg-[var(--k-color-bg-secondary)]",
            isError && "rounded-b-none after:bg-[var(--k-color-icon-state-error-default)] focus-within:after:bg-[var(--k-color-icon-state-error-default)]",
            disabled && "pointer-events-none",
          )}
        >
          {prefix ? (
            <span className="flex h-full min-w-[40px] shrink-0 items-center justify-center bg-[var(--k-color-bg-secondary)] px-[var(--k-spacing-3-5)] text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)] transition-colors group-hover/text-field-input:bg-[var(--k-color-bg-tertiary)] group-focus-within/text-field-input:bg-[var(--k-color-bg-tertiary)]">
              {prefix}
            </span>
          ) : null}

          <input
            id={inputId}
            data-slot="text-field-input"
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
            className={cn(
              "h-full min-w-0 flex-1 bg-transparent py-[var(--k-spacing-3)] text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)] outline-none placeholder:text-[var(--k-color-text-placeholder)]",
              hasChrome ? "px-[var(--k-spacing-3)]" : "px-[var(--k-spacing-3-5)]"
            )}
            {...props}
          />

          {rightIcon ? (
            <span className="mr-[var(--k-spacing-3-5)] flex shrink-0 items-center text-[var(--k-color-icon-secondary)] [&_svg]:size-5">
              {rightIcon}
            </span>
          ) : null}

          {action ? (
            <span className="mr-[var(--k-spacing-3-5)] flex shrink-0 items-center">
              {action}
            </span>
          ) : null}

          {suffix ? (
            <span className="flex h-full min-w-[40px] shrink-0 items-center justify-center bg-[var(--k-color-bg-secondary)] px-[var(--k-spacing-3-5)] text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)] transition-colors group-hover/text-field-input:bg-[var(--k-color-bg-tertiary)] group-focus-within/text-field-input:bg-[var(--k-color-bg-tertiary)]">
              {suffix}
            </span>
          ) : null}
        </div>
      </div>

      {showSupportingContent ? (
        <div className="flex w-full items-center gap-[var(--k-spacing-1)]">
          {isSuccess ? (
            <CheckCircle2 aria-hidden="true" className="size-[14px] shrink-0 text-[var(--k-color-icon-state-success-default)]" />
          ) : null}
          <p
            className={cn(
              "min-w-0 flex-1 text-[length:var(--k-typography-size-sm)] font-normal leading-[var(--k-typography-line-height-5)]",
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

function ClipboardAction({ children = "PASTE" }: { children?: React.ReactNode }) {
  return (
    <LinkButton size="md" showLeftIcon leftIcon={<Clipboard aria-hidden="true" />} showRightIcon={false}>
      {children}
    </LinkButton>
  )
}

export { ClipboardAction, EyeOff as TextFieldPasswordIcon, TextField }
export default TextField
