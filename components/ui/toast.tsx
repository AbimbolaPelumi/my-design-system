"use client"

import * as React from "react"
import { Toast as ToastPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

export interface ToastProps
  extends React.ComponentProps<typeof ToastPrimitive.Root> {
  state?: "Default" | "Error" | "Inverted"
  breakpoint?: "Desktop" | "Mobile"
  text?: React.ReactNode
  cta?: React.ReactNode
  withCta?: boolean
  onCtaClick?: React.MouseEventHandler<HTMLButtonElement>
}

function Toast({
  className,
  state = "Default",
  breakpoint = "Desktop",
  text = "Message goes here",
  cta = "Action",
  withCta = true,
  onCtaClick,
  children,
  ...props
}: ToastProps) {
  const isMobile = breakpoint === "Mobile"
  const isDefault = state === "Default"
  const isError = state === "Error"
  const isInverted = state === "Inverted"

  return (
    <ToastPrimitive.Root
      data-slot="toast"
      data-state-variant={state}
      data-breakpoint={breakpoint}
      className={cn(
        "flex w-[343px] items-center rounded-[var(--k-radius-default)] font-sans tracking-[var(--k-typography-letter-spacing-normal)]",
        isMobile
          ? "min-w-[288px] max-w-[360px] px-[var(--k-spacing-4)] py-[var(--k-spacing-3)] text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)]"
          : "min-w-[320px] max-w-[560px] px-[var(--k-spacing-5)] py-[var(--k-spacing-3-5)] text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)]",
        withCta ? "gap-[var(--k-spacing-2)]" : "gap-0",
        isDefault && "bg-[var(--k-color-bg-accent-softblack-default)] text-[var(--k-color-text-inverted)]",
        isError && "bg-[var(--k-color-bg-state-error-default)] text-[var(--k-color-static-black)]",
        isInverted && "bg-[var(--k-color-static-white)] text-[var(--k-color-static-black)]",
        className
      )}
      {...props}
    >
      {children ?? (
        <>
          <ToastPrimitive.Title
            data-slot="toast-text"
            className={cn("min-w-px flex-1 font-normal", !withCta && "text-center")}
          >
            {text}
          </ToastPrimitive.Title>
          {withCta ? (
            <ToastPrimitive.Action asChild altText={String(cta)}>
              <button
                data-slot="toast-action"
                type="button"
                onClick={onCtaClick}
                className="max-w-[319px] shrink-0 whitespace-nowrap text-right font-semibold outline-none focus-visible:ring-2 focus-visible:ring-[var(--k-color-border-brand-primary-default)] focus-visible:ring-offset-2"
              >
                {cta}
              </button>
            </ToastPrimitive.Action>
          ) : null}
        </>
      )}
    </ToastPrimitive.Root>
  )
}

const ToastProvider = ToastPrimitive.Provider

function ToastViewport({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        "fixed bottom-[var(--k-spacing-4)] right-[var(--k-spacing-4)] z-50 flex max-h-screen w-auto flex-col gap-[var(--k-spacing-2)] outline-none",
        className
      )}
      {...props}
    />
  )
}

export { Toast, ToastProvider, ToastViewport }
export default Toast
