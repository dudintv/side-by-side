# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Side-by-Side Framework Comparison** application built with Nuxt 4. It's a documentation site that compares code examples across different frontend frameworks (Vue, React, Angular) in a side-by-side format.

## Common Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build locally
- `npm run postinstall` - Run after installing dependencies (runs `nuxt prepare`)

## Architecture

### Content Management System
The project uses **@nuxt/content** with collections defined in `content.config.ts`:
- `content` collection: General pages (`*.md`)
- `topics` collection: Topic pages (`topics/*.md`) with `menu` frontmatter for navigation
- `examples` collection: Code examples (`examples/**/*.md`)

### Example File Naming Convention
Examples follow a strict naming pattern: `{framework}.{version}.{variant}.md`
- Example: `vue.3_5.composition.md` = Vue 3.5 with Composition API
- Example: `react.19.functional.md` = React 19 with functional components
- Note: Underscores in version numbers (e.g., `3_5` for version 3.5)

### Example Directory Structure
```
content/examples/
  {topic-number}.{topic-name}/
    {sub-topic}/
      {framework}.{version}.{variant}.md
    00.main.{variant}/
      {framework}.{version}.{variant}.md
```
- `00.main.*` directories contain primary examples shown with tabs
- Other subdirectories contain sub-topic examples shown directly on the page

### Framework Configuration
Framework settings are centralized in `app/composables/useSettings.ts`:
- `frameworks`: Defines available frameworks with their versions and variants
- `currentFrameworks`: Array of currently selected frameworks (default: `['react', 'vue']`)
- `hasLineNumbers`: Toggle for line numbers in code blocks
- Uses Nuxt's `useState` for reactive global state

Framework types in `app/types/index.ts`:
- `FrameworkName`: `'vue' | 'react' | 'angular'`
- `FrameworkMeta`: Contains `name`, `versions[]`, and optional `variants[]`
- `Frameworks`: Record mapping framework names to their metadata

### Dynamic Topic Page Flow (`app/pages/topics/[topic].vue`)
1. Fetches topic page from `topics` collection by route parameter
2. Queries all examples matching the topic path pattern (`/examples/{topic}/%`)
3. Separates examples into two categories:
   - `main`: Examples from `00.main.*` directories, grouped by variant
   - `other`: All other examples, grouped by sub-topic name
4. Passes structured data to `ContentRenderer` via `:data` prop
5. Topic markdown files use components like `<MainExamples>` and `<TopicExamples>` to render examples

### Example Display Components
- `MainExamples.vue`: Displays primary examples with tab navigation between variants
- `TopicExamples.vue`: Displays sub-topic examples (requires `:topic` prop matching sub-topic name)
- `ComparingExamples.vue`: Core layout that creates side-by-side grid based on selected frameworks
- All components hardcode framework lookup (e.g., `['react.19.functional']`, `['vue.3_5.composition']`)

### Styling and UI
- Uses **@nuxt/ui** (Nuxt UI) for component library
- Custom styles in `assets/css/main.css`
- Content syntax highlighting disabled in `nuxt.config.ts` (`highlight: false`)
- Custom code block rendering via `app/components/content/ProsePre.vue`

## Key Files

- `app/composables/useSettings.ts` - Global state for framework selection and settings
- `app/types/index.ts` - TypeScript types for framework configuration
- `content.config.ts` - Content collections definition
- `app/pages/topics/[topic].vue` - Dynamic topic page with example query logic
- `content/topics/*.md` - Topic pages that use `<MainExamples>` and `<TopicExamples>` components

## Development Notes

- All Vue components use `<script setup>` syntax with TypeScript
- Content queries use `queryCollection()` API from @nuxt/content
- Regex patterns in topic page parse example paths to extract variant and flavor information
- When adding new frameworks, update `useSettings.ts` and component hardcoded arrays