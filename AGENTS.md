<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design System — Codex Rules

## Project overview

This is a React design system built on Next.js, ShadCN, and Tailwind.

It is the single source of code for all UI components used in prototypes.

## Sources of truth

- **Tokens:** Zeroheight, synced from the Figma variables file via automated pipeline
- **Components:** Figma components file, read directly through the configured Figma MCP tools during component work

## File locations

- Raw tokens from Zeroheight: `tokens/raw/tokens.json`
- Generated CSS variables: `tokens/output/variables.css`
- Generated TypeScript tokens: `tokens/output/tokens.ts`
- All components: `components/ui/[ComponentName].tsx`
- All stories: `stories/[ComponentName].stories.tsx`
- ShadCN CSS variable aliases: `app/globals.css`

## Token rules

- Never hardcode hex values, pixel values, or font names in components.
- Always use CSS custom properties, for example `var(--color-primary)` or `var(--spacing-4)`.
- Token names come from `tokens/output/variables.css`; check that file before using any value.
- Tailwind utility classes that reference project tokens are allowed, for example `bg-primary` or `text-sm`.
- Do not edit `tokens/raw/tokens.json` or anything in `tokens/output/*` by hand. These files are generated.

## Component rules

- Every component must wrap or extend a ShadCN primitive.
- Never replace ShadCN primitives with custom implementations unless explicitly instructed.
- At the start of every component build, use the configured Figma MCP tools to inspect the relevant Figma component.
- Use `get_design_context` to understand the component structure, variants, and behavior.
- Use `get_variable_defs` to confirm which tokens the component references in Figma.
- For composite components, confirm the actual nested Figma component source before choosing local code components. Do not substitute a visually similar component based on a variant name. For example, `Button Group` composition values like `filled + tonal + text` must use the `Button` component's `Text` variant if Figma composes it from `Button`; do not replace it with `Link Button`.
- Treat Figma component composition as part of the spec. If Figma says a component is composed from `Button`, `Checkbox`, `Radio`, etc., reuse that exact local component family unless the user explicitly approves a different implementation.
- When a Figma variant label overlaps with another component name, verify intent from the node/component source and screenshot before implementation. Variant words such as `text`, `link`, `selected`, `active`, or `default` are not enough by themselves to choose a different component.
- All Figma variants must map 1:1 to TypeScript props.
- Translate Figma variants into clean React and Radix APIs; do not blindly copy Figma-only state names into public props.
- Do not expose duplicate props. For example, use Radix `checked`, `defaultChecked`, and `disabled` instead of adding aliases like `active` or a separate `state="Disabled"`.
- Keep transient visual states such as hover, pressed, and focus as CSS states or Storybook visual examples unless consumers genuinely need to control them.
- Storybook controls should expose consumer-facing props only; visual matrices can demonstrate design states without expanding the component API.
- Match Figma layout and token values exactly for component variants, especially spacing, sizing, backgrounds, and typography. If a Figma variant has a visible background or layout distinction, the Storybook story must make that distinction obvious.
- Before calling a component complete, verify the rendered Storybook output, not only TypeScript/build success.
- Preserve all Radix UI accessibility behavior from the underlying ShadCN primitive.
- Export a named TypeScript interface for every component’s props.
- Keep component APIs predictable, typed, and consistent with existing components in `components/ui`.

## Storybook rules

- Every standalone component must have a Storybook story in `stories/[ComponentName].stories.tsx`.
- Stories must cover all Figma variants.
- Stories should demonstrate realistic usage, not implementation details.
- Use token-based styling in stories as well; do not hardcode visual values.

## Figma files

- **Variables / tokens:** https://www.figma.com/design/lnx2bnSUtb4q3Yh3hy55F1/Foundations-2.0?m=auto&t=K5wZ9r4nVRyC3Hwc-1
- **Components:** https://www.figma.com/design/dnlGPtECtOcAmoOWiAIHt5/Web-Components-2.0?m=auto&t=K5wZ9r4nVRyC3Hwc-1

## Component build order

Build components in this order. Do not start a higher tier until its dependencies are complete.

### Tier 1 — Primitives

These components have no dependencies on other custom components.

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

### Tier 2 — Simple composites

These depend only on Tier 1 components.

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
- Progress Indicator, circular and horizontal
- Transaction Timeline

### Tier 3 — Complex composites

These depend on Tier 1 and Tier 2 components.

- Alerts, page-level and inline
- Modal
- Drawer / Side Drawer
- Date Picker
- Infographic Radio / Infographic Radio Group
- Lists, including Default, Transaction, Currency, Stock, User, and Card variants
- Horizontal / Vertical Key Value Pair
- Menu / Dropdown Menu / Menu List Item
- Empty State
- Product Tour Widget

### Tier 4 — Domain-specific cards

These depend on Tier 1 through Tier 3 components.

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

### Tier 5 — Navigation and patterns

These depend on Tier 1 through Tier 4 components.

- Top Nav / Dashboard Top Nav / Chat Header
- Full Page Container
- Side Navigation — in progress; build last
- Table — in progress; build last

## Components to skip

Do not build these as standalone components. They are internal, utility, deprecated, or implementation-detail components.

- `_ [OLD] Quick Action Card`
- `_Balance Group`
- `_PIN Field`
- `.Day Item`
- `.TabItem`
- `.Tab`
- `.Spend Categories Menu`
- `_Side Nav Item`
- `_Header Cell`
- `_Cell`
- `_Page`
- `_Column`
- `_Transaction Timeline Item`
- `_Kuda Logo`
- `_Promo Badge`
- `Limit Indicator`
- `Illustration`

## Working discipline

- Build one component per Codex task/session unless explicitly instructed otherwise.
- Before editing, inspect the existing repository structure and nearby component patterns.
- Before building a component, inspect the relevant Figma component and token references.
- After implementation, run the relevant checks for the files changed.
- Prefer targeted checks first, then broader checks when appropriate.
- Commit after each completed component before starting the next one.
- Keep commits focused on a single component or tightly related change.
- Do not modify generated token files by hand.
- Do not introduce new production dependencies without explicit approval.

## Expected implementation workflow

For each component:

1. Inspect the existing ShadCN primitive and current project conventions.
2. Inspect the matching Figma component using Figma MCP.
3. For composite components, identify the nested Figma component sources and map them to the matching local components before writing code.
4. Confirm the tokens used by the component with `get_variable_defs`.
5. Check `tokens/output/variables.css` for the correct CSS custom properties.
6. Implement the component in `components/ui/[ComponentName].tsx`.
7. Export a named TypeScript props interface.
8. Preserve Radix UI and ShadCN accessibility behavior.
9. Add or update the Storybook story in `stories/[ComponentName].stories.tsx`.
10. Run type-checking, linting, and relevant tests if available.
11. Commit the component before moving to the next one.

## Quality bar

- Components must match Figma variants and behavior.
- Component props must map cleanly to Figma variants.
- Styling must use tokens, CSS variables, or token-backed Tailwind utilities.
- Accessibility behavior from Radix UI must remain intact.
- Components must be reusable, typed, and consistent with the rest of the design system.
- Avoid one-off styling, hardcoded values, and undocumented variants.
