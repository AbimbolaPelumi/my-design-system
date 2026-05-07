"use client"

import * as React from "react"
import { CircleX, Search as SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SearchProps extends Omit<React.ComponentProps<"input">, "size"> {
  onClear?: () => void
}

function Search({ className, value, defaultValue, onClear, placeholder = "Search", ...props }: SearchProps) {
  const hasValue = Boolean(value ?? defaultValue)

  return (
    <div
      data-slot="search"
      className={cn(
        "relative flex w-[335px] items-center gap-[var(--k-spacing-2)] overflow-hidden rounded-[var(--k-radius-default)] bg-[var(--k-color-bg-primary)] p-[var(--k-spacing-2-5)] font-sans transition-colors",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-transparent after:content-['']",
        "hover:bg-[var(--k-color-bg-secondary)] focus-within:rounded-b-none focus-within:after:bg-[var(--k-color-border-brand-primary-default)]",
        className
      )}
    >
      <SearchIcon aria-hidden="true" className="size-5 shrink-0 text-[var(--k-color-icon-secondary)]" />
      <input
        data-slot="search-input"
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="h-[20px] min-w-0 flex-1 bg-transparent text-[length:var(--k-typography-size-sm)] leading-[var(--k-typography-line-height-5)] text-[var(--k-color-text-primary)] outline-none placeholder:text-[var(--k-color-text-placeholder)]"
        {...props}
      />
      {hasValue ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={onClear}
          className="shrink-0 text-[var(--k-color-icon-secondary)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--k-color-border-brand-primary-default)]"
        >
          <CircleX aria-hidden="true" className="size-5" />
        </button>
      ) : null}
    </div>
  )
}

export { Search }
export default Search
