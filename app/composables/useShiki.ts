import { createHighlighter, type Highlighter } from 'shiki';
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationHighlight,
  transformerNotationErrorLevel,
  transformerRenderIndentGuides,
  transformerNotationFocus,
  transformerRemoveLineBreak,
} from '@shikijs/transformers';

// Singleton instance
let highlighterInstance: Highlighter | null = null;
let highlighterPromise: Promise<Highlighter> | null = null;

/**
 * Get or create a singleton Shiki highlighter instance
 * This ensures we only create one highlighter for the entire application
 */
export async function useShiki(): Promise<Highlighter> {
  // Return existing instance if available
  if (highlighterInstance) {
    return highlighterInstance;
  }

  // Return pending promise if already initializing
  if (highlighterPromise) {
    return highlighterPromise;
  }

  // Create new instance
  highlighterPromise = createHighlighter({
    themes: ['vitesse-dark', 'vitesse-light'],
    langs: ['javascript', 'typescript', 'jsx', 'tsx', 'vue', 'xml', 'html'],
  }).then((highlighter) => {
    highlighterInstance = highlighter;
    return highlighter;
  });

  return highlighterPromise;
}

/**
 * Highlight code using the singleton Shiki instance
 */
export async function highlightCode(
  code: string,
  lang: string,
  meta?: string
): Promise<string> {
  const highlighter = await useShiki();

  return highlighter.codeToHtml(code.trim(), {
    lang,
    meta: meta ? { __raw: meta } : undefined,
    themes: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    transformers: [
      transformerMetaHighlight(),
      transformerMetaWordHighlight(),
      transformerNotationHighlight(),
      transformerNotationErrorLevel(),
      transformerNotationFocus(),
      transformerRenderIndentGuides(),
      transformerRemoveLineBreak(),
    ],
  });
}
