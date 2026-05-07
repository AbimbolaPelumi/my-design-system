# Design System — Claude Code Rules

## Project overview
This is a React design system built on Next.js + ShadCN + Tailwind.
It is the single source of code for all UI components used in prototypes.

## Sources of truth
- **Tokens**: Zeroheight (synced from Figma variables file via automated pipeline)
- **Components**: Figma components file (read directly via Figma MCP in each build session)

## File locations
- Raw tokens (from Zeroheight): `tokens/raw/tokens.json`
- Generated CSS variables: `tokens/output/variables.css`
- Generated TypeScript tokens: `tokens/output/tokens.ts`
- All components: `components/ui/[ComponentName].tsx`
- All stories: `stories/[ComponentName].stories.tsx`
- ShadCN CSS variable aliases: `app/globals.css`

## Token rules
- Never hardcode hex values, pixel values, or font names in components
- Always use CSS custom properties: `var(--color-primary)`, `var(--spacing-4)` etc.
- Token names come from `tokens/output/variables.css` — check there before using any value
- Tailwind utility classes that reference our tokens are allowed (e.g. `bg-primary`, `text-sm`)

## Component rules
- Every component wraps a ShadCN primitive — never replace ShadCN, only extend it
- Use `get_design_context` via Figma MCP at the start of every component session
- Use `get_variable_defs` to confirm which tokens the component references in Figma
- All Figma variants must map 1:1 to TypeScript props
- Translate Figma variants into clean React and Radix APIs; do not blindly copy Figma-only state names into public props
- Do not expose duplicate props. For example, use Radix `checked`, `defaultChecked`, and `disabled` instead of adding aliases like `active` or a separate `state="Disabled"`
- Keep transient visual states such as hover, pressed, and focus as CSS states or Storybook visual examples unless consumers genuinely need to control them
- Storybook controls should expose consumer-facing props only; visual matrices can demonstrate design states without expanding the component API
- Match Figma layout and token values exactly for component variants, especially spacing, sizing, backgrounds, and typography. If a Figma variant has a visible background or layout distinction, the Storybook story must make that distinction obvious
- Before calling a component complete, verify the rendered Storybook output, not only TypeScript/build success
- Preserve all Radix UI accessibility behaviour from the underlying ShadCN primitive
- Export a named TypeScript interface for every component's props

## Figma files
- **Variables (tokens):** https://www.figma.com/design/lnx2bnSUtb4q3Yh3hy55F1/Foundations-2.0?m=auto&t=K5wZ9r4nVRyC3Hwc-1
- **Components:** https://www.figma.com/design/dnlGPtECtOcAmoOWiAIHt5/Web-Components-2.0?m=auto&t=K5wZ9r4nVRyC3Hwc-1

## Component build order

### Tier 1 — Primitives (no dependencies on other components)
- Toggle
- Checkbox / Checkbox Field
- Radio Button / Radio Field / Radio Group
- Divider
- Scrollbar
- Slider
- Badge / Counter Badge / Status Badge
- Avatar
- Tooltip
- Loader / Kuda Loader
- Skeleton Loader
- Toast

### Tier 2 — Simple composites (depend only on Tier 1)
- Button / Icon Button / Link Button / Button Group
- Text Field / Phone Number Field / Copy Text Field
- Text Area
- Search
- Select / Spend Category Select / Spend Category Chip
- PIN Input
- Upload Field
- Segmented Control
- Tabs / Tab Group
- Accordion
- Carousel Indicator
- Chat Bubble
- Progress Indicator (Circular + Horizontal)
- Transaction Timeline

### Tier 3 — Complex composites (depend on Tier 1 + 2)
- Alerts (Page-level + Inline)
- Modal
- Drawer / Side Drawer
- Date Picker
- Infographic Radio / Infographic Radio Group
- Lists (all variants: Default, Transaction, Currency, Stock, User, Card)
- Horizontal / Vertical Key Value Pair
- Menu / Dropdown Menu / Menu List Item
- Empty State
- Product Tour Widget

### Tier 4 — Domain-specific cards (depend on Tier 1–3)
- Section Header
- Quick Action Card
- Action Card
- Balance Card / Balance Group
- Savings Pocket Card
- Credit Product Card
- Currency Switcher / Currency Selector
- Bullet Item / Bullet List Card
- Send Money Container
- YML Card
- Dashboard Tiles / Dashboard Tiles Carousel

### Tier 5 — Navigation & Patterns (depend on Tier 1–4)
- Top Nav / Dashboard Top Nav / Chat Header
- Full Page Container
- Side Navigation (🟠 in progress — build last)
- Table (🟠 in progress — build last)

### Skip entirely (internal/utility — not built as standalone components)
- _ [OLD] Quick Action Card
- _Balance Group
- _PIN Field
- .Day Item
- .TabItem
- .Tab
- .Spend Categories Menu
- _Side Nav Item
- _Header Cell
- _Cell
- _Page
- _Column
- _Transaction Timeline Item
- _Kuda Logo
- _Promo Badge
- Limit Indicator
- Illustration

## Session discipline
- Build one component per Claude Code session
- Always commit after each component before starting the next
- Never modify `tokens/raw/tokens.json` or `tokens/output/*` by hand — these are generated
