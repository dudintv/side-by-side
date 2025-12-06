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

  const flattenToc = (items: TocLink[], level = 1): TocItem[] => {
    const result: TocItem[] = [];

    for (const item of items) {
      // Only include H2 tags (level 1 in the TOC hierarchy)
      if (item.id && item.text && item.depth === 2) {
        result.push({
          id: item.id,
          text: item.text,
          level,
        });
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
    // Mobile: header (96px) + LocalNav (48px) = 144px
    // Desktop: header (128px)
    const isMobile = window.innerWidth < 768;
    const headerOffset = isMobile ? 144 : 128;
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
    { rootMargin: '-12% 0px -40% 0px' }
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
  <div v-if="toc.length > 0">
    <!-- Desktop TOC in sidebar -->
    <div class="hidden md:block mt-8">
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
              ? 'font-medium bg-elevated py-2 opacity-100 border-r-1'
              : 'pr-4 opacity-80 hover:opacity-100'
          "
        >
          {{ item.text }}
        </button>
      </nav>
    </div>

    <!-- Mobile TOC dropdown in LocalNav -->
    <Teleport to="#local-nav-toc">
      <span class="text-sm text-muted mr-2 hidden sm:block">On the page:</span>
      <UPopover :content="{ side: 'bottom', align: 'end' }">
        <UButton icon="i-lucide-list" color="neutral" variant="subtle" aria-label="On this page" />

        <template #content>
          <div class="p-2 min-w-[200px] max-w-[280px]">
            <div class="text-xs font-semibold text-gray-600 dark:text-gray-400 px-2 pb-2">On this page</div>
            <nav class="flex flex-col gap-1">
              <button
                v-for="item in toc"
                :key="item.id"
                @click="scrollToSection(item.id)"
                class="block w-full text-left text-sm transition-all duration-200 px-3 py-2 rounded cursor-pointer"
                :class="activeId === item.id ? 'font-medium bg-elevated' : 'hover:bg-elevated/50'"
              >
                {{ item.text }}
              </button>
            </nav>
          </div>
        </template>
      </UPopover>
    </Teleport>
  </div>
</template>
