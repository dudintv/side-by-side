<script setup lang="ts">
import { createHighlighter } from 'shiki';
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationHighlight,
  // transformerNotationWordHighlight,
  transformerRemoveLineBreak,
  transformerNotationErrorLevel,
  transformerRenderIndentGuides,
  transformerNotationFocus,
} from '@shikijs/transformers';

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();
// const attrsWithoutCode = computed(() => {
//   const withoutCode = { ...attrs };
//   void (withoutCode.code && delete withoutCode.code);
//   return withoutCode;
// });
const highlighter = await createHighlighter({
  themes: ['vitesse-dark', 'vitesse-light'],
  langs: ['javascript', 'typescript', 'jsx', 'vue'],
});

const htmlCode = computed(() => {
  const code = (attrs.code as string).trim();

  return highlighter.codeToHtml(code, {
    lang: attrs.language as string,
    meta: attrs.meta ? { __raw: attrs.meta as string } : undefined,
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
      // transformerNotationWordHighlight(),
      transformerRenderIndentGuides(),
      transformerRemoveLineBreak(),
    ],
  });
});

const codeContainer = useTemplateRef('codeContainer');

onMounted(() => {
  if (!codeContainer.value) return;
  const exampleRoot = codeContainer.value.closest('.example-root') as Element;
  if (!exampleRoot) return;

  const handleMouseEnter: EventListener = (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'SPAN' && target.classList.contains('highlighted-word')) {
      const text = target.textContent?.trim();
      if (text) {
        exampleRoot?.querySelectorAll('.highlighted-word')?.forEach((word) => {
          if (word.textContent?.trim() === text) {
            const htmlWord = word as HTMLElement;

            htmlWord.classList.remove('animate');
            // Animate hovered element immediately, and the rest elements with delay
            htmlWord.style.animationDelay = word === target ? '0s' : '0.1s';
            htmlWord.classList.add('animate');
          }
        });
      }
    }
  };

  const handleMouseLeave: EventListener = (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'SPAN' && target.classList.contains('highlighted-word')) {
      exampleRoot?.querySelectorAll('.highlighted-word')?.forEach((word) => {
        const htmlWord = word as HTMLElement;
        htmlWord.classList.remove('animate');
        htmlWord.style.animationDelay = '';
      });
    }
  };

  exampleRoot.addEventListener('mouseenter', handleMouseEnter, true);
  exampleRoot.addEventListener('mouseleave', handleMouseLeave, true);

  onBeforeUnmount(() => {
    exampleRoot?.removeEventListener('mouseenter', handleMouseEnter, true);
    exampleRoot?.removeEventListener('mouseleave', handleMouseLeave, true);
  });
});
</script>

<template>
  <div ref="codeContainer">
    <!-- <pre class="text-primary/50">{{ attrsWithoutCode }}</pre>
    <pre
      :class="attrs.class as string"
      class="py-8 text-sm text-primary/30"
      :style="attrs.style as string"
    ><slot /></pre> -->
    <div v-html="htmlCode" />
  </div>
</template>
