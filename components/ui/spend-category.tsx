"use client"

import * as React from "react"
import {
  Banknote,
  BookOpen,
  Building2,
  Car,
  CheckCircle2,
  Clapperboard,
  Gift,
  GraduationCap,
  Heart,
  Home,
  Plane,
  ShoppingBag,
  Smartphone,
  Trophy,
  Utensils,
  Wifi,
} from "lucide-react"
import Select, { type SelectOption, type SelectProps } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export type SpendCategory =
  | "Food"
  | "Education"
  | "Transport"
  | "Phone & Internet"
  | "Entertainment"
  | "Miscellaneous"
  | "Groceries"
  | "Health"
  | "Personal Care"
  | "Housing"
  | "Utilities"
  | "Savings"
  | "Donations"
  | "Shopping"
  | "Travel"
  | "Betting"
  | "Gift(s)"
  | "Investments"
  | "Loan Repayment"

const categoryMeta: Record<SpendCategory, { icon: React.ElementType; color: string }> = {
  Food: { icon: Utensils, color: "bg-[var(--k-color-bg-decorative-pink)]" },
  Education: { icon: BookOpen, color: "bg-[var(--k-color-bg-decorative-blue)]" },
  Transport: { icon: Car, color: "bg-[var(--k-color-bg-decorative-purple)]" },
  "Phone & Internet": { icon: Wifi, color: "bg-[var(--k-color-bg-decorative-green)]" },
  Entertainment: { icon: Clapperboard, color: "bg-[var(--k-color-bg-decorative-red)]" },
  Miscellaneous: { icon: Banknote, color: "bg-[var(--k-color-bg-decorative-gray)]" },
  Groceries: { icon: ShoppingBag, color: "bg-[var(--k-color-bg-decorative-yellow)]" },
  Health: { icon: Heart, color: "bg-[var(--k-color-bg-decorative-red)]" },
  "Personal Care": { icon: GraduationCap, color: "bg-[var(--k-color-bg-decorative-pink)]" },
  Housing: { icon: Building2, color: "bg-[var(--k-color-bg-decorative-blue)]" },
  Utilities: { icon: Smartphone, color: "bg-[var(--k-color-bg-decorative-red)]" },
  Savings: { icon: Home, color: "bg-[var(--k-color-bg-decorative-green)]" },
  Donations: { icon: Heart, color: "bg-[var(--k-color-bg-decorative-blue)]" },
  Shopping: { icon: ShoppingBag, color: "bg-[var(--k-color-bg-decorative-pink)]" },
  Travel: { icon: Plane, color: "bg-[var(--k-color-bg-decorative-yellow)]" },
  Betting: { icon: Trophy, color: "bg-[var(--k-color-bg-decorative-purple)]" },
  "Gift(s)": { icon: Gift, color: "bg-[var(--k-color-bg-decorative-red)]" },
  Investments: { icon: Banknote, color: "bg-[var(--k-color-bg-decorative-blue)]" },
  "Loan Repayment": { icon: Banknote, color: "bg-[var(--k-color-bg-decorative-red)]" },
}

export const spendCategories = Object.keys(categoryMeta) as SpendCategory[]

function CategoryIcon({ category, selected = false }: { category: SpendCategory; selected?: boolean }) {
  const meta = categoryMeta[category]
  const Icon = selected ? CheckCircle2 : meta.icon

  if (selected) {
    return <Icon aria-hidden="true" className="size-6 text-[var(--k-color-static-lavendar-default)]" />
  }

  return (
    <span className={cn("flex shrink-0 items-center rounded-[var(--k-radius-sm)] p-[var(--k-spacing-0-5)]", meta.color)}>
      <Icon aria-hidden="true" className="size-5 text-[var(--k-color-static-black)]" />
    </span>
  )
}

export interface SpendCategoryChipProps extends React.ComponentProps<"button"> {
  category?: SpendCategory
  selected?: boolean
}

function SpendCategoryChip({
  category = "Food",
  selected = false,
  className,
  type = "button",
  ...props
}: SpendCategoryChipProps) {
  return (
    <button
      data-slot="spend-category-chip"
      data-category={category}
      data-selected={selected}
      type={type}
      className={cn(
        "flex min-h-[48px] min-w-[40px] items-center justify-center gap-[var(--k-spacing-1)] overflow-hidden rounded-[var(--k-radius-default)] p-[var(--k-spacing-3)] font-sans text-[length:var(--k-typography-size-md)] leading-[var(--k-typography-line-height-6)] text-[var(--k-color-text-primary)] outline-none transition-colors",
        selected
          ? "bg-[var(--k-color-static-lavendar-lightest)] text-[var(--k-color-static-black)] shadow-[inset_0_0_0_1px_var(--k-color-static-lavendar-default)]"
          : "bg-[var(--k-color-bg-primary)] hover:bg-[var(--k-color-bg-secondary)]",
        "focus-visible:ring-2 focus-visible:ring-[var(--k-color-border-brand-primary-default)] focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <CategoryIcon category={category} selected={selected} />
      <span className="px-[var(--k-spacing-1)]">{category}</span>
    </button>
  )
}

function categoryOptions(): SelectOption[] {
  return spendCategories.map((category) => ({
    label: category,
    value: category,
    icon: <CategoryIcon category={category} />,
  }))
}

export interface SpendCategorySelectProps
  extends Omit<SelectProps, "options" | "placeholder"> {
  placeholder?: string
}

function SpendCategorySelect({
  label = "Category",
  placeholder = "Select category",
  ...props
}: SpendCategorySelectProps) {
  return (
    <Select
      label={label}
      placeholder={placeholder}
      options={categoryOptions()}
      {...props}
    />
  )
}

export { CategoryIcon, SpendCategoryChip, SpendCategorySelect }
