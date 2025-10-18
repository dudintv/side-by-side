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

### Code Quality
- ESLint is configured with Nuxt's built-in ESLint config
- Prettier is available for formatting
- TypeScript is enabled throughout the project

## Architecture

### Content Management System
The project uses **@nuxt/content** with a structured approach:
- `content/topics/*.md` - Main topic pages with menu titles in frontmatter
- `content/examples/**/*.md` - Code examples organized by topic and sub-topic
- Examples follow naming pattern: `{framework}.{version}.{variant}.md`

### Framework Comparison System
- **Settings Management**: `app/composables/useSettings.ts` manages framework selection, TypeScript toggle, and available frameworks/versions
- **Framework Types**: `app/types/index.ts` defines `FrameworkName`, `FrameworkMeta`, and `Frameworks` types
- **Example Display**: 
  - `MainExamples.vue` - Shows primary examples for a topic
  - `TopicExamples.vue` - Shows sub-topic examples
  - `SideBySide.vue` - Core component for side-by-side comparison
  - `FrameworkSelector.vue` - Framework selection UI

### Content Collections
Defined in `content.config.ts`:
- `content` - General pages (*.md)
- `topics` - Topic pages (topics/*.md) 
- `examples` - Code examples (examples/**/*.md)

### Page Structure
- `/` - Homepage with main examples
- `/topics/[topic]` - Dynamic topic pages that load examples based on the topic parameter
- Uses Nuxt UI for components and styling

### Example Organization
Examples are structured as:
```
content/examples/
  {topic-number}.{topic-name}/
    {sub-topic}/
      {framework}.{version}.{variant}.md
```

Current supported frameworks:
- Vue 3.5 (Composition API, Options API)  
- React 19 (Functional components)
- Angular 12

## Key Files to Understand

- `app/app.vue` - Root application layout using Nuxt UI components
- `app/pages/topics/[topic].vue` - Dynamic topic page template
- `content/topics/*.md` - Topic definitions with menu titles and example organization
- Example files contain code snippets in markdown code blocks specific to each framework

## Development Notes

- The project uses Nuxt 4's new app directory structure
- All Vue components use `<script setup>` syntax with TypeScript
- State management uses Nuxt's built-in `useState` for framework selection and settings
- Content is automatically indexed and made available via Nuxt Content's query API