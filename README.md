# Your UI — Developer Guide

An animated component library distributed via CLI (like shadcn/ui), built with React, Tailwind CSS, and pure CSS animations.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Daily Development Workflow](#daily-development-workflow)
- [Creating a New Component](#creating-a-new-component)
- [Creating a New Block (Paid)](#creating-a-new-block-paid)
- [Animation System](#animation-system)
- [Testing](#testing)
- [Storybook](#storybook)
- [Registry Build & Publishing](#registry-build--publishing)
- [CLI Development](#cli-development)
- [Framework Adapters](#framework-adapters)
- [Code Conventions](#code-conventions)
- [Troubleshooting](#troubleshooting)

---

## Architecture Overview

This is **not** a traditional npm component library. Users never `npm install` components. Instead:

1. **Registry** — Component source files live in `registry/`. A build script compiles them into JSON entries in `dist/r/`.
2. **CLI** — Published to npm as `your-ui`. Users run `npx your-ui add animated-button`, which fetches the JSON from the registry and copies the raw source into their project.
3. **Dev Playground** — A Next.js app in `apps/dev/` for fast hot-reload previewing during development.
4. **Docs Site** — A **separate repository** that consumes the library via the CLI, exactly like a real user would (dogfooding).

```
┌─────────────────────────────────────────────────────────┐
│                    Monorepo (this repo)                  │
│                                                         │
│   registry/          Source components, hooks, utils     │
│   apps/dev/          Dev playground (hot-reload preview) │
│   packages/cli/      CLI tool (published to npm)         │
│   registry-config/   Component metadata                  │
│   scripts/           Build scripts                       │
│   .storybook/        Storybook configuration             │
│   dist/r/            Built registry JSON (deployed)      │
│                                                         │
└───────────────────────────┬─────────────────────────────┘
                            │
              deploy dist/r/ to CDN / API
                            │
              ┌─────────────▼─────────────┐
              │   Docs Site (separate repo) │
              │   Uses CLI like any user    │
              └───────────────────────────┘
```

---

## Prerequisites

| Tool   | Version | Install                              |
| ------ | ------- | ------------------------------------ |
| Node   | ≥ 18    | https://nodejs.org                   |
| pnpm   | ≥ 9     | `npm install -g pnpm`                |

---

## Getting Started

```bash
# Clone the repo
git clone <your-repo-url>
cd your-ui

# Install all dependencies
pnpm install

# Start the dev playground
pnpm dev:playground          # http://localhost:3001

# Start Storybook
pnpm storybook               # http://localhost:6006

# Run tests in watch mode
pnpm test
```

---

## Project Structure

```
your-ui/
├── apps/
│   └── dev/                              Dev playground (Next.js)
│       ├── app/
│       │   ├── globals.css               Imports registry styles
│       │   ├── layout.tsx                Root layout with nav
│       │   ├── page.tsx                  Index with component links
│       │   └── preview/
│       │       └── <component-name>/
│       │           └── page.tsx          Preview page per component
│       ├── next.config.ts
│       ├── tsconfig.json                 @/ alias points to monorepo root
│       └── package.json
│
├── packages/
│   └── cli/                              CLI tool (published to npm as "your-ui")
│       ├── src/
│       │   ├── index.ts                  Entry point, command definitions
│       │   ├── commands/
│       │   │   ├── init.ts               `your-ui init` — project setup
│       │   │   └── add.ts               `your-ui add` — install components
│       │   ├── frameworks/               Framework adapters
│       │   │   ├── index.ts             Adapter registry + auto-detection
│       │   │   ├── next.ts              Next.js
│       │   │   ├── vite.ts              Vite + React
│       │   │   ├── laravel.ts           Laravel + Inertia
│       │   │   ├── astro.ts             Astro
│       │   │   ├── react-router.ts      React Router
│       │   │   └── tanstack.ts          TanStack Start / Router
│       │   └── utils/
│       │       └── packages.ts          Package manager detection
│       ├── tsup.config.ts               CLI bundler config
│       └── package.json
│
├── registry/                             ★ THE PRODUCT — component source code
│   ├── ui/                              Free UI primitives
│   │   ├── animated-button.tsx          Component source
│   │   ├── animated-button.stories.tsx  Storybook stories
│   │   └── __tests__/
│   │       └── animated-button.test.tsx Unit tests
│   ├── hooks/                           Reusable React hooks
│   │   └── use-animate-on-scroll.ts
│   ├── lib/                             Shared utilities
│   │   └── utils.ts                     cn() function
│   ├── blocks/                          Paid composed sections
│   │   └── hero-section-01.tsx
│   └── styles/
│       └── globals.css                  Design tokens + animation keyframes
│
├── registry-config/                      Component metadata (not shipped)
│   ├── schema.ts                        TypeScript types for registry entries
│   ├── registry-ui.ts                   UI component definitions
│   └── registry-blocks.ts              Block definitions (free + paid)
│
├── scripts/
│   └── build-registry.ts               Reads source + metadata → dist/r/*.json
│
├── dist/r/                              Built registry JSON (gitignored, deployed)
│
├── .storybook/
│   ├── main.ts                          Storybook config (stories glob, addons)
│   ├── preview.ts                       Global decorators and styles
│   └── tsconfig.json                    TypeScript config for .storybook/
│
├── .npmrc                               pnpm hoisting rules for Storybook
├── vitest.config.ts                     Test runner config
├── vitest.setup.ts                      Test setup (custom matchers)
├── tsconfig.json                        Root TypeScript config
├── turbo.json                           Turborepo task config
├── pnpm-workspace.yaml                  Workspace definitions
└── package.json                         Root scripts and dev dependencies
```

---

## Daily Development Workflow

| Command                | What it does                                |
| ---------------------- | ------------------------------------------- |
| `pnpm dev:playground`  | Start dev preview at localhost:3001         |
| `pnpm storybook`       | Start Storybook at localhost:6006           |
| `pnpm test`            | Run tests in watch mode                     |
| `pnpm test:run`        | Run tests once (CI)                         |
| `pnpm test:coverage`   | Run tests with coverage report              |
| `pnpm build:registry`  | Build `dist/r/*.json` from source           |
| `pnpm build`           | Build all packages (CLI, etc.)              |

**Typical dev loop:**

```
1. Edit component         →  registry/ui/<name>.tsx
2. See it live             →  Dev playground auto-reloads
3. Check all states        →  Storybook
4. Verify behavior         →  pnpm test
5. Ready to ship           →  pnpm build:registry
```

---

## Creating a New Component

Follow these steps for every new component. The Animated Button is the reference implementation — match its patterns exactly.

### Step 1: Create the component source

Create `registry/ui/<component-name>.tsx`:

```tsx
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/lib/utils";

const componentVariants = cva(
  // Base classes (applied to every instance)
  "your-base-classes transition-all duration-[var(--duration-fast)]",
  {
    variants: {
      variant: {
        default: "...",
        // Add more variants
      },
      size: {
        default: "...",
        sm: "...",
        lg: "...",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface YourComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Add component-specific props here
}

const YourComponent = React.forwardRef<HTMLDivElement, YourComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
YourComponent.displayName = "YourComponent";

export { YourComponent, componentVariants };
```

**Mandatory patterns every component must follow:**

| Pattern | Why |
| --- | --- |
| `"use client"` at the top | Next.js App Router compatibility. Harmless in other frameworks. |
| `React.forwardRef` | Enables parent access to the DOM element (focus traps, measurements, scroll). |
| `cn()` for className merging | Ensures user's `className` overrides conflicting default classes via tailwind-merge. |
| `cva()` for variants | Type-safe variant management with auto-generated TypeScript types. |
| Named exports | Tree-shakable and unambiguous for IDE auto-imports. |
| `displayName` | Shows readable name in React DevTools instead of "ForwardRef". |
| Export both component and variants | Users can apply variant styles to other elements. |

### Step 2: Write unit tests

Create `registry/ui/__tests__/<component-name>.test.tsx`.

Every component must test these categories:

```tsx
import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { YourComponent } from "../your-component";

describe("YourComponent", () => {
  // 1. RENDERING — does it render at all?
  describe("Rendering", () => {
    it("renders with children", () => { /* ... */ });
    it("renders the correct HTML element", () => { /* ... */ });
  });

  // 2. VARIANTS — does every variant render without crashing?
  describe("Variants", () => {
    const variants = ["default", "other"] as const;
    variants.forEach((variant) => {
      it(`renders "${variant}" variant`, () => { /* ... */ });
    });
  });

  // 3. INTERACTIONS — click, hover, keyboard
  describe("Interactions", () => {
    it("calls onClick when clicked", async () => { /* ... */ });
    it("does not fire onClick when disabled", async () => { /* ... */ });
  });

  // 4. ACCESSIBILITY — keyboard nav, ARIA
  describe("Accessibility", () => {
    it("is focusable via keyboard", async () => { /* ... */ });
  });

  // 5. REF FORWARDING
  describe("Ref forwarding", () => {
    it("forwards ref to the DOM element", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<YourComponent ref={ref}>Test</YourComponent>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  // 6. CLASSNAME MERGING
  describe("className merging", () => {
    it("accepts custom className", () => { /* ... */ });
    it("user className overrides conflicting Tailwind classes", () => { /* ... */ });
  });

  // 7. HTML ATTRIBUTE PASSTHROUGH
  describe("HTML attribute passthrough", () => {
    it("passes through data-* attributes", () => { /* ... */ });
    it("passes through aria-* attributes", () => { /* ... */ });
  });

  // 8. COMPOSITION (if component supports asChild)
  // describe("asChild", () => { /* ... */ });
});
```

**Run tests:**

```bash
pnpm test                     # Watch mode during development
pnpm test:run                 # Single run (CI)
pnpm test:coverage            # With coverage report
```

### Step 3: Write Storybook stories

Create `registry/ui/<component-name>.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "./your-component";

const meta: Meta<typeof YourComponent> = {
  title: "UI/YourComponent",       // Sidebar path in Storybook
  component: YourComponent,
  tags: ["autodocs"],               // Auto-generate docs page from props
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "other"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "Component size",
    },
  },
  args: {
    children: "Example content",
    variant: "default",
    size: "default",
  },
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

// Default story — fully interactive via Controls panel
export const Default: Story = {};

// One story per variant
export const OtherVariant: Story = {
  args: { variant: "other" },
};

// A showcase story showing everything together
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <YourComponent variant="default">Default</YourComponent>
      <YourComponent variant="other">Other</YourComponent>
    </div>
  ),
};

// Animation-specific story (if applicable)
export const AnimationDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-muted-foreground">
        Interact to see the animation
      </p>
      <YourComponent>Animated</YourComponent>
    </div>
  ),
};
```

**Key Storybook conventions:**

- `tags: ["autodocs"]` — Always include this. It auto-generates a documentation page from TypeScript types.
- One story per variant — Makes each variant independently linkable.
- An `AllVariants` story — Shows everything side-by-side for quick visual comparison.
- Animation demos — Since animations are the library's differentiator, dedicate a story to demonstrating them.

### Step 4: Create a dev playground preview page

Create `apps/dev/app/preview/<component-name>/page.tsx`:

```tsx
"use client";

import { YourComponent } from "@/registry/ui/your-component";

export default function YourComponentPreview() {
  return (
    <div className="space-y-12 max-w-3xl">
      <h1 className="text-2xl font-bold">YourComponent</h1>

      <section>
        <h2 className="text-lg font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <YourComponent variant="default">Default</YourComponent>
          {/* Add all variants */}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Sizes</h2>
        <div className="flex items-center gap-4">
          <YourComponent size="sm">Small</YourComponent>
          <YourComponent size="default">Default</YourComponent>
          <YourComponent size="lg">Large</YourComponent>
        </div>
      </section>
    </div>
  );
}
```

Add a link to the new preview in `apps/dev/app/layout.tsx` nav and `apps/dev/app/page.tsx` index.

### Step 5: Register in the registry config

Add an entry to `registry-config/registry-ui.ts`:

```typescript
{
  name: "your-component",
  type: "registry:ui",
  title: "Your Component",
  description: "Description of what it does.",
  dependencies: [
    // npm packages this component needs at runtime
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ],
  devDependencies: [],
  registryDependencies: ["utils"],   // other registry components it depends on
},
```

### Step 6: Add file mapping in the build script

In `scripts/build-registry.ts`, add to the `FILE_MAP`:

```typescript
"your-component": { source: "ui/your-component.tsx", type: "registry:ui" },
```

### Step 7: Build and verify

```bash
# Build the registry JSON
pnpm build:registry

# Verify the JSON was created
ls dist/r/your-component.json

# Test the full install flow locally
cd /tmp && npx create-next-app@latest test-install
cd test-install
node /path/to/your-ui/packages/cli/dist/index.js init
node /path/to/your-ui/packages/cli/dist/index.js add your-component --registry file:///path/to/your-ui/dist/r
```

### Checklist

Use this for every new component:

- [ ] `registry/ui/<name>.tsx` — Component source
- [ ] `registry/ui/__tests__/<name>.test.tsx` — Unit tests (all 7+ categories)
- [ ] `registry/ui/<name>.stories.tsx` — Storybook stories (all variants, animation demo)
- [ ] `apps/dev/app/preview/<name>/page.tsx` — Dev playground preview
- [ ] `registry-config/registry-ui.ts` — Registry entry added
- [ ] `scripts/build-registry.ts` — File mapping added
- [ ] `pnpm test:run` — All tests pass
- [ ] `pnpm storybook` — All stories render
- [ ] `pnpm build:registry` — JSON builds without errors
- [ ] End-to-end test: CLI install into a fresh project works

---

## Creating a New Block (Paid)

Blocks are composed sections (hero, footer, pricing table) built from your UI components. They follow the same patterns but are gated behind a license key.

### Step 1: Create the block source

Create `registry/blocks/<block-name>.tsx`:

```tsx
"use client";

import * as React from "react";
import { AnimatedButton } from "@/registry/ui/animated-button";
import { cn } from "@/registry/lib/utils";

interface YourBlockProps {
  // Block-specific props
  className?: string;
}

export function YourBlock({ className }: YourBlockProps) {
  return (
    <section className={cn("relative ...", className)}>
      {/* Compose using YOUR library's components */}
      <AnimatedButton>CTA</AnimatedButton>
    </section>
  );
}
```

**Block rules:**

- Blocks must only use components from YOUR library (no one-off styled divs where a library component exists).
- Blocks should accept a `className` prop for layout customization.
- Blocks should have meaningful props for content (title, subtitle, etc.) — don't hardcode text.

### Step 2: Register the block

Add to `registry-config/registry-blocks.ts`:

```typescript
{
  name: "your-block",
  type: "registry:block",
  title: "Your Block",
  description: "Description.",
  dependencies: [],
  devDependencies: [],
  registryDependencies: ["animated-button", "utils"],  // all components it uses
  meta: { paid: true },
},
```

### Step 3: Add to the build script

Add the file mapping and include `registryBlocks` in the build loop (same pattern as UI components).

### Step 4: Write stories and tests

Same process as UI components. Blocks should have at least:

- A default story with realistic content
- A dark mode story
- A responsive story (using Storybook viewport addon)
- Basic render tests

---

## Animation System

All animations are defined in `registry/styles/globals.css` as pure CSS keyframes registered with Tailwind via the `@theme` block.

### Available animation classes

| Class | Effect | Duration |
| --- | --- | --- |
| `animate-fade-in` | Opacity 0 → 1 | 250ms |
| `animate-fade-out` | Opacity 1 → 0 | 250ms |
| `animate-fade-up` | Fade in + slide up 12px | 400ms |
| `animate-fade-down` | Fade in + slide down 12px | 400ms |
| `animate-fade-left` | Fade in + slide left 12px | 400ms |
| `animate-fade-right` | Fade in + slide right 12px | 400ms |
| `animate-scale-in` | Fade in + scale from 95% | 250ms |
| `animate-scale-out` | Fade out + scale to 95% | 150ms |
| `animate-slide-in-right` | Slide from 100% right | 250ms |
| `animate-slide-in-left` | Slide from 100% left | 250ms |
| `animate-slide-in-top` | Slide from 100% top | 250ms |
| `animate-slide-in-bottom` | Slide from 100% bottom | 250ms |
| `animate-button-press` | Scale to 97% and back | 150ms |
| `animate-shake` | Horizontal shake (error) | 400ms |
| `animate-bounce-soft` | Gentle vertical bounce | 500ms |
| `animate-spin-slow` | Continuous slow rotation | 3s loop |
| `animate-pulse-soft` | Gentle opacity pulse | 2s loop |

### Adding a new animation

1. Define the `@keyframes` in `registry/styles/globals.css`
2. Register it in the `@theme` block as `--animate-<name>`
3. Use it in components as `animate-<name>`

```css
/* 1. Keyframes */
@keyframes your-animation {
  from { /* start state */ }
  to   { /* end state */ }
}

/* 2. Register in @theme block */
@theme {
  --animate-your-animation: your-animation var(--duration-normal) var(--ease-spring) forwards;
}
```

```tsx
// 3. Use in component
<div className="animate-your-animation">...</div>
```

### Animation guidelines

- **Only animate `transform` and `opacity`.** These properties are GPU-composited and don't trigger layout reflow. Never animate `width`, `height`, `top`, `left`, `margin`, or `padding`.
- **Use CSS custom properties for timing.** `var(--duration-fast)`, `var(--duration-normal)`, `var(--duration-slow)` let users customize speed globally.
- **Use `forwards` fill mode** for entrance animations so the element retains its final visible state.
- **Prefer `transition-all` for state changes** (hover, focus, active) and `@keyframes` for entrance/exit/attention animations.
- **Keep animations subtle.** The default `button-press` scales to 97% — not 90%. Subtle animations feel professional; exaggerated ones feel cheap.

---

## Testing

### Tech stack

| Tool | Purpose |
| --- | --- |
| Vitest | Test runner (fast, native ESM/TypeScript) |
| @testing-library/react | Render components, query by role/text/label |
| @testing-library/user-event | Simulate real user interactions |
| @testing-library/jest-dom | Custom matchers (toBeInTheDocument, toHaveClass, etc.) |
| jsdom | Browser DOM simulation in Node.js |
| @vitest/coverage-v8 | Code coverage reporting |

### Running tests

```bash
pnpm test                     # Watch mode — re-runs on file changes
pnpm test:run                 # Single run (use in CI)
pnpm test:coverage            # Generate coverage report
```

### Test file location

Tests live next to the component source:

```
registry/ui/
├── animated-button.tsx
└── __tests__/
    └── animated-button.test.tsx
```

### What to test (mandatory categories)

Every component must have tests for:

1. **Rendering** — Does it render? Correct HTML element?
2. **Variants** — Every variant/size renders without crashing (parameterized loop).
3. **Interactions** — onClick fires, disabled prevents clicks, keyboard activation.
4. **Loading/States** — If applicable: loading spinner, aria-busy, disabled.
5. **Accessibility** — Keyboard focusable (Tab), activatable (Enter/Space), ARIA attributes.
6. **Ref forwarding** — `React.createRef` receives the correct DOM element type.
7. **className merging** — Custom className is applied. Conflicting Tailwind classes resolve in favor of the user's class.
8. **HTML attribute passthrough** — `data-*`, `aria-*`, `type`, etc. pass through to the DOM.
9. **Composition** — If the component supports `asChild`, test that it renders as the child element with correct props.

### Testing philosophy

- **Query by role, not by class or test ID.** `screen.getByRole("button", { name: /click me/i })` is more resilient than `screen.getByTestId("btn")`. It also validates accessibility — if the role query doesn't find it, screen readers can't either.
- **Use `userEvent` over `fireEvent`.** `userEvent.click()` simulates the full browser event sequence (mousedown → focus → mouseup → click). `fireEvent.click()` only fires the click event. The former catches more real-world bugs.
- **Don't test animation visuals in unit tests.** You can verify that animation classes are applied (`expect(el.className).toMatch(/animate-/)`), but you cannot verify that the animation looks correct in jsdom. Visual regression testing (Chromatic) handles that.
- **Mock nothing unless you have to.** Prefer real rendering over mocking. The only things worth mocking in a component library are browser APIs that jsdom doesn't support (IntersectionObserver, ResizeObserver).

---

## Storybook

### Running Storybook

```bash
pnpm storybook                # Dev server at localhost:6006
pnpm build-storybook          # Production build (for CI/deployment)
```

### Story file location

Stories live next to the component source:

```
registry/ui/
├── animated-button.tsx
├── animated-button.stories.tsx    ← here
└── __tests__/
    └── animated-button.test.tsx
```

### Story structure

Every component should have these stories:

| Story | Purpose |
| --- | --- |
| `Default` | Interactive baseline — all controls work |
| One per variant | Each variant independently viewable and linkable |
| `AllVariants` | Side-by-side visual comparison |
| `AnimationDemo` | Demonstrates the component's animation behavior |
| Edge cases | Long text, empty content, RTL, etc. |

### Addons

| Addon | What it does | How to use |
| --- | --- | --- |
| **Controls** | Auto-generated prop knobs in the panel | Defined via `argTypes` in story meta |
| **Actions** | Logs event handler calls (onClick, onChange) | Automatically detected for `on*` props |
| **Viewport** | Responsive breakpoint preview | Click the viewport icon in the toolbar |
| **A11y** | Runs axe-core accessibility audit | Check the "Accessibility" panel tab |
| **Interactions** | Step-through `play` function execution | Add `play` functions to stories |

### Common Storybook issues

**"Cannot find module @storybook/..."**
Ensure `.npmrc` at the monorepo root contains:
```
public-hoist-pattern[]=*@storybook/*
```
Then run `pnpm install`.

**Styles not loading:**
Verify `.storybook/preview.ts` imports `../registry/styles/globals.css`.

**Path aliases not resolving:**
Verify `.storybook/main.ts` → `viteFinal` adds the `@/` alias pointing to the monorepo root.

---

## Registry Build & Publishing

### Building the registry

```bash
pnpm build:registry
```

This reads every component source file + its metadata from `registry-config/`, transforms imports for end-user projects, and writes JSON to `dist/r/`.

**Example output:**

```
dist/r/
├── utils.json
├── animated-button.json
└── hero-section-01.json
```

Each JSON file contains:

```json
{
  "name": "animated-button",
  "type": "registry:ui",
  "title": "Animated Button",
  "description": "...",
  "dependencies": ["@radix-ui/react-slot", "class-variance-authority", ...],
  "registryDependencies": ["utils"],
  "files": [
    {
      "path": "ui/animated-button.tsx",
      "content": "\"use client\";\n\nimport * as React from \"react\";\n...",
      "type": "registry:ui"
    }
  ]
}
```

### Deploying the registry

**Option A: Static hosting (free components only)**

Deploy `dist/r/` as static files to Vercel, Cloudflare Pages, Netlify, or GitHub Pages. The CLI fetches `https://your-ui.dev/r/<name>.json`.

**Option B: API with license validation (for paid blocks)**

Deploy a serverless function that reads the JSON files and validates the `x-license-key` header before returning paid blocks.

### Publishing the CLI

```bash
cd packages/cli
pnpm build
npm publish
```

Users can then run:

```bash
npx your-ui@latest init
npx your-ui@latest add animated-button
```

---

## CLI Development

### Architecture

The CLI has three layers:

1. **Commands** (`src/commands/`) — Define what `init` and `add` do.
2. **Framework Adapters** (`src/frameworks/`) — Encapsulate framework-specific knowledge.
3. **Utilities** (`src/utils/`) — Shared helpers (package manager detection, etc.).

### Local testing

```bash
# Build the CLI
cd packages/cli
pnpm build

# Test in a fresh project
cd /tmp
npx create-next-app@latest test-project
cd test-project

# Run your local CLI build
node /path/to/your-ui/packages/cli/dist/index.js init
node /path/to/your-ui/packages/cli/dist/index.js add animated-button \
  --registry file:///path/to/your-ui/dist/r
```

### Watch mode

During CLI development, use watch mode so changes rebuild automatically:

```bash
cd packages/cli
pnpm dev          # tsup --watch
```

---

## Framework Adapters

Each adapter in `packages/cli/src/frameworks/` exports an object with:

| Field | Purpose |
| --- | --- |
| `name` | Identifier stored in `components.json` |
| `label` | Human-readable name for prompts |
| `detect(projectRoot)` | Returns 0-1 confidence score for framework detection |
| `defaults` | Default file paths (CSS, components dir, alias prefix) |
| `transformSource(code)` | Transforms component source for the target framework |

### Currently supported

| Framework | Adapter file | Status |
| --- | --- | --- |
| Next.js | `next.ts` | Active |
| Vite + React | `vite.ts` | Active |
| Laravel + Inertia | `laravel.ts` | Stub |
| Astro | `astro.ts` | Stub |
| React Router | `react-router.ts` | Stub |
| TanStack Start/Router | `tanstack.ts` | Stub |

### Adding a new framework adapter

1. Create `packages/cli/src/frameworks/<framework>.ts`
2. Implement the `FrameworkAdapter` interface
3. Import and add it to the `frameworks` array in `packages/cli/src/frameworks/index.ts`
4. Test detection and installation in a real project of that framework type

**Detection tips:**

- Check `package.json` dependencies for framework-specific packages
- Check for framework-specific config files (e.g., `next.config.ts`, `astro.config.mjs`)
- Subtract confidence when detecting a different framework that also uses the same tooling (e.g., Astro uses Vite, but it's not a "Vite" project)

**Transform tips:**

- `"use client"` — Required in Next.js App Router, unnecessary elsewhere. Strip it for Vite, Laravel, React Router. Keep it for Astro (harmless).
- Alias prefix — Next.js uses `@/`, React Router and TanStack use `~/`. Replace in `transformSource`.

---

## Code Conventions

### Imports

```tsx
// 1. "use client" (if needed)
"use client";

// 2. React
import * as React from "react";

// 3. Third-party packages (alphabetical)
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

// 4. Internal imports
import { cn } from "@/registry/lib/utils";
```

### Naming

- **Component files:** `kebab-case.tsx` (e.g., `animated-button.tsx`)
- **Component exports:** `PascalCase` (e.g., `AnimatedButton`)
- **Variant functions:** `camelCase` + `Variants` suffix (e.g., `buttonVariants`)
- **Test files:** Same name + `.test.tsx` in `__tests__/` directory
- **Story files:** Same name + `.stories.tsx` next to the component
- **CSS animation names:** `kebab-case` (e.g., `fade-up`, `button-press`)

### Component structure order

1. `"use client"` directive
2. Imports
3. `cva()` variant definition
4. Props interface (extends HTML attributes + VariantProps)
5. `React.forwardRef` component
6. `displayName`
7. Named exports

### What NOT to do

- Do not use default exports
- Do not use inline styles — use Tailwind classes
- Do not import React as default (`import React from "react"`) — use namespace import (`import * as React from "react"`)
- Do not animate layout properties (width, height, top, left, margin, padding)
- Do not make Framer Motion or any JS animation library a hard dependency
- Do not add comments that narrate what the code does — only explain non-obvious decisions

---

## Troubleshooting

### Storybook: "Cannot find module @storybook/..."

**Cause:** pnpm's strict `node_modules` structure doesn't hoist Storybook packages.

**Fix:** Add to `.npmrc` at the monorepo root:
```
public-hoist-pattern[]=*@storybook/*
```
Then run `pnpm install`.

### Dev playground: Component changes not hot-reloading

**Cause:** The `@/` path alias isn't pointing to the monorepo root.

**Fix:** Verify `apps/dev/tsconfig.json` has:
```json
"paths": { "@/*": ["../../*"] }
```

### Tests: "ReferenceError: document is not defined"

**Cause:** Vitest isn't using the jsdom environment.

**Fix:** Verify `vitest.config.ts` has `environment: "jsdom"`.

### Build registry: "No file mapping for component"

**Cause:** You added a registry-config entry but forgot the FILE_MAP entry in the build script.

**Fix:** Add the source path mapping in `scripts/build-registry.ts`.

### CLI: "pnpm: command not found" during `your-ui add`

**Cause:** The user's project uses a different package manager.

**Fix:** The CLI detects the package manager via lock files. Ensure `packages/cli/src/utils/packages.ts` correctly detects and uses the right one.

### Tailwind classes not applying in Storybook

**Cause:** Global CSS not imported in Storybook preview.

**Fix:** Verify `.storybook/preview.ts` imports `../registry/styles/globals.css`.
