<script setup lang="ts">
import { highlightCode } from '~/composables/useShiki';

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

// Use singleton Shiki instance for highlighting
const htmlCode = ref('');
const isHighlighting = ref(true);

onMounted(async () => {
  try {
    const code = (attrs.code as string) || '';
    const language = (attrs.language as string) || 'text';
    const meta = attrs.meta as string | undefined;

    htmlCode.value = await highlightCode(code, language, meta);
    isHighlighting.value = false;
  } catch (error) {
    console.error('Error highlighting code:', error);
    isHighlighting.value = false;
  }
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
    <!-- Show loading state while highlighting (only on first render) -->
    <div v-if="isHighlighting" class="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-32" />
    <!-- Show highlighted code once ready -->
    <div v-else v-html="htmlCode" />
  </div>
</template>
