"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

export interface SliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root> {}

function Slider({
  className,
  defaultValue = [0],
  min = 0,
  max = 100,
  step = 1,
  ...props
}: SliderProps) {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      className={cn(
        "relative flex h-[40px] w-[335px] touch-none select-none items-center",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-[var(--k-opacity-40)]",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative h-[16px] w-full grow overflow-hidden rounded-[var(--k-radius-sm)] bg-[var(--k-color-border-primary)]"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full rounded-[var(--k-radius-sm)] bg-[var(--k-color-static-lavendar-default)]"
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        data-slot="slider-thumb"
        className={cn(
          "block h-[40px] w-[40px] rounded-[var(--k-radius-lg)] bg-[var(--k-color-static-lavendar-default)] shadow-[0_0_10px_0_rgba(64,25,109,0.3)] outline-none",
          "after:absolute after:left-1/2 after:top-1/2 after:block after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[var(--k-radius-full)] after:bg-[var(--k-color-icon-on-solid-default)] after:content-['']",
          "focus-visible:ring-2 focus-visible:ring-[var(--k-color-border-brand-primary-default)] focus-visible:ring-offset-2"
        )}
      />
    </SliderPrimitive.Root>
  )
}

export { Slider }
export default Slider
