<script setup lang="ts">
import type { TocLink, TopicsCollectionItem } from '@nuxt/content';

const props = defineProps<{ page: TopicsCollectionItem }>();

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const toc = computed<TocItem[]>(() => {
  if (!props.page.body?.toc?.links) {
    return [];
  }

  const flattenToc = (items: TocLink[], level = 2): TocItem[] => {
    const result: TocItem[] = [];

    for (const item of items) {
      if (item.id && item.text) {
        result.push({
          id: item.id,
          text: item.text,
          level,
        });
      }

      if (item.children?.length) {
        result.push(...flattenToc(item.children, level + 1));
      }
    }

    return result;
  };

  return flattenToc(props.page.body.toc.links);
});

const activeId = ref('');

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 128;
    const elementPosition = element.offsetTop - headerOffset;

    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });

    // Update URL hash without causing a page jump
    const url = new URL(window.location.href);
    url.hash = `#${id}`;
    window.history.replaceState(null, '', url.toString());
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
          break;
        }
      }
    },
    { rootMargin: '-12% 0px -65% 0px' }
  );

  toc.value.forEach(({ id }) => {
    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div v-if="toc.length > 0" class="mt-8">
    <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-100 ml-2">
      {{ page.meta.menu }}
    </h3>
    <nav class="flex flex-col gap-2 text-nowrap -ml-2">
      <button
        v-for="item in toc"
        :key="item.id"
        @click="scrollToSection(item.id)"
        class="block w-full text-left text-sm transition-all duration-200 px-4 cursor-pointer"
        :class="
          activeId === item.id
            ? 'font-medium bg-elevated py-2 rounded-3xl opacity-100'
            : 'pr-4 opacity-80 hover:opacity-100'
        "
      >
        {{ item.text }}
      </button>
    </nav>
  </div>
</template>
