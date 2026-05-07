"use client"

import * as React from "react"
import { Copy } from "lucide-react"
import LinkButton from "@/components/ui/link-button"
import { cn } from "@/lib/utils"

export interface CopyTextFieldProps extends React.ComponentProps<"div"> {
  label?: React.ReactNode
  description?: React.ReactNode
  copyLabel?: React.ReactNode
  onCopy?: () => void
}

function CopyTextField({
  label = "Label",
  description = "Description",
  copyLabel = "COPY",
  onCopy,
  className,
  ...props
}: CopyTextFieldProps) {
  return (
    <div
      data-slot="copy-text-field"
      className={cn(
        "flex w-[335px] flex-col items-start justify-end gap-[var(--k-spacing-0-5)] rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-primary)] px-[var(--k-spacing-5)] py-[var(--k-spacing-3-5)] font-sans",
        className
      )}
      {...props}
    >
      <p className="w-full text-[length:var(--k-typography-size-xs)] font-normal leading-[var(--k-typography-line-height-4)] text-[var(--k-color-text-primary)]">
        {label}
      </p>
      <div className="flex w-full items-center gap-[var(--k-spacing-3)]">
        <p className="min-w-0 flex-1 text-[length:var(--k-typography-size-md)] font-semibold leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)]">
          {description}
        </p>
        <LinkButton
          aria-label="Copy"
          showRightIcon
          rightIcon={<Copy aria-hidden="true" />}
          onClick={onCopy}
        >
          {copyLabel}
        </LinkButton>
      </div>
    </div>
  )
}

export { CopyTextField }
export default CopyTextField
