"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

const avatarSizeClasses = {
  "2xl": {
    root: "size-[86px]",
    text: "text-[length:var(--k-typography-size-5xl)] leading-[var(--k-typography-line-height-12)]",
    indicator: "size-[14px]",
    badge: "min-h-[20px] min-w-[20px] text-[length:var(--k-typography-size-xs)] leading-[var(--k-typography-line-height-4)]",
  },
  xl: {
    root: "size-[80px]",
    text: "text-[length:var(--k-typography-size-4xl)] leading-[var(--k-typography-line-height-9)]",
    indicator: "size-[12px]",
    badge: "min-h-[18px] min-w-[18px] text-[length:var(--k-typography-size-xs)] leading-[var(--k-typography-line-height-4)]",
  },
  lg: {
    root: "size-[54px]",
    text: "text-[length:var(--k-typography-size-2xl)] leading-[var(--k-typography-line-height-6)]",
    indicator: "size-[10px]",
    badge: "min-h-[16px] min-w-[16px] text-[length:var(--k-typography-size-3xs)] leading-[var(--k-typography-line-height-3)]",
  },
  md: {
    root: "size-[40px]",
    text: "text-[length:var(--k-typography-size-lg)] leading-[var(--k-typography-line-height-5)]",
    indicator: "size-[8px]",
    badge: "min-h-[14px] min-w-[14px] text-[length:var(--k-typography-size-3xs)] leading-[var(--k-typography-line-height-3)]",
  },
  sm: {
    root: "size-[32px]",
    text: "text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-4)]",
    indicator: "size-[6px]",
    badge: "min-h-[12px] min-w-[12px] text-[length:var(--k-typography-size-3xs)] leading-[var(--k-typography-line-height-3)]",
  },
}

export interface AvatarProps
  extends Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "children"> {
  entity?: "User" | "Business"
  variant?: "Initial" | "Image"
  size?: keyof typeof avatarSizeClasses
  initials?: string
  src?: string
  alt?: string
  showTierBadge?: boolean
  tierBadge?: React.ReactNode
  showNotificationIndicator?: boolean
  friendsOfKuda?: boolean
}

function Avatar({
  className,
  entity = "User",
  variant = "Initial",
  size = "2xl",
  initials = "A",
  src,
  alt = initials,
  showTierBadge = false,
  tierBadge = "",
  showNotificationIndicator = false,
  friendsOfKuda = false,
  ...props
}: AvatarProps) {
  const sizeClasses = avatarSizeClasses[size]
  const isBusiness = entity === "Business"

  return (
    <span data-slot="avatar-wrapper" className="relative inline-flex">
      <AvatarPrimitive.Root
        data-slot="avatar"
        data-entity={entity}
        data-variant={variant}
        data-size={size}
        className={cn(
          "relative flex shrink-0 items-center justify-center overflow-hidden font-sans font-semibold tracking-[var(--k-typography-letter-spacing-normal)]",
          sizeClasses.root,
          isBusiness
            ? "rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-accent-softblack-default)] text-[var(--k-color-text-inverted)]"
            : "rounded-[var(--k-radius-full)] bg-[var(--k-color-static-lavendar-default)] text-[var(--k-color-static-white)]",
          friendsOfKuda && "ring-2 ring-[var(--k-color-static-lavendar-default)] ring-offset-2",
          className
        )}
        {...props}
      >
        {variant === "Image" && src ? (
          <AvatarPrimitive.Image
            data-slot="avatar-image"
            src={src}
            alt={alt}
            className={cn(
              "h-full w-full object-cover",
              isBusiness ? "rounded-[var(--k-radius-default)]" : "rounded-[var(--k-radius-full)]"
            )}
          />
        ) : null}
        <AvatarPrimitive.Fallback
          data-slot="avatar-fallback"
          className={cn("flex h-full w-full items-center justify-center", sizeClasses.text)}
        >
          {initials.slice(0, 2)}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>
      {showNotificationIndicator ? (
        <span
          data-slot="avatar-notification-indicator"
          className={cn(
            "absolute right-0 top-0 rounded-[var(--k-radius-full)] bg-[var(--k-color-bg-state-error-default)] ring-2 ring-[var(--k-color-bg-surface)]",
            sizeClasses.indicator
          )}
        />
      ) : null}
      {showTierBadge ? (
        <span
          data-slot="avatar-tier-badge"
          className={cn(
            "absolute bottom-0 right-0 inline-flex items-center justify-center rounded-[var(--k-radius-full)] bg-[var(--k-color-bg-brand-tertiary-default)] px-[var(--k-spacing-1)] font-sans font-semibold text-[var(--k-color-static-black)]",
            sizeClasses.badge
          )}
        >
          {tierBadge}
        </span>
      ) : null}
    </span>
  )
}

export { Avatar }
export default Avatar
