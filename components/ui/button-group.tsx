"use client"

import * as React from "react"
import Button from "./button"
import { cn } from "../../lib/utils"

export type ButtonGroupComposition =
  | "filled + tonal"
  | "tonal + tonal"
  | "filled + tonal + text"
  | "tonal + text"
  | "filled + text"
  | "filled + destructive"
  | "destructive + tonal"

export interface ButtonGroupProps extends React.ComponentProps<"div"> {
  layout?: "Inline" | "Stacked"
  composition?: ButtonGroupComposition
  buttonCount?: 2 | 3
}

function defaultItems(composition: ButtonGroupComposition) {
  switch (composition) {
    case "tonal + tonal":
      return [
        <Button key="tonal-1" variant="Tonal" size="md">Label</Button>,
        <Button key="tonal-2" variant="Tonal" size="md">Label</Button>,
      ]
    case "filled + tonal + text":
      return [
        <Button key="filled" variant="Filled" size="md">Label</Button>,
        <Button key="tonal" variant="Tonal" size="md">Label</Button>,
        <Button key="text" variant="Text" size="md" data-button-group-role="text">Label</Button>,
      ]
    case "tonal + text":
      return [
        <Button key="tonal" variant="Tonal" size="md">Label</Button>,
        <Button key="text" variant="Text" size="md" data-button-group-role="text">Label</Button>,
      ]
    case "filled + text":
      return [
        <Button key="filled" variant="Filled" size="md">Label</Button>,
        <Button key="text" variant="Text" size="md" data-button-group-role="text">Label</Button>,
      ]
    case "filled + destructive":
      return [
        <Button key="filled" variant="Filled" size="md">Label</Button>,
        <Button key="destructive" variant="Text" size="md" isDestructive data-button-group-role="text">Label</Button>,
      ]
    case "destructive + tonal":
      return [
        <Button key="destructive" variant="Filled" size="md" isDestructive>Label</Button>,
        <Button key="tonal" variant="Tonal" size="md">Label</Button>,
      ]
    case "filled + tonal":
    default:
      return [
        <Button key="filled" variant="Filled" size="md">Label</Button>,
        <Button key="tonal" variant="Tonal" size="md">Label</Button>,
      ]
  }
}

function ButtonGroup({
  layout = "Inline",
  composition = "filled + tonal",
  buttonCount,
  children,
  className,
  ...props
}: ButtonGroupProps) {
  const items = React.Children.toArray(children ?? defaultItems(composition))
  const visibleItems = buttonCount ? items.slice(0, buttonCount) : items
  const isStacked = layout === "Stacked"

  return (
    <div
      data-slot="button-group"
      data-layout={layout}
      data-composition={composition}
      className={cn(
        "flex gap-[var(--k-spacing-3)] p-0",
        isStacked ? "isolate w-[335px] flex-col items-start justify-center" : "items-center",
        className
      )}
      {...props}
    >
      {visibleItems.map((item) => {
        if (
          !isStacked ||
          !React.isValidElement<{
            className?: string
            "data-button-group-role"?: string
          }>(item)
        ) {
          return item
        }

        const isTextButton = item.props["data-button-group-role"] === "text"
        return React.cloneElement(item, {
          className: cn(
            item.props.className,
            isTextButton ? "self-center" : "w-full"
          ),
        })
      })}
    </div>
  )
}

export { ButtonGroup }
export default ButtonGroup
