<script setup lang="ts">
// import type { TocLink } from '@nuxt/content';
import type { NavigationMenuItem } from '@nuxt/ui';

const { hasLineNumbers } = useSettings();

const { data: pages } = await useAsyncData('topics', () => queryCollection('topics').all());

const navigationItems = computed<NavigationMenuItem[]>(() => {
  if (!pages.value) return [];

  return pages.value.map((page) => ({
    label: page.meta.menu as string,
    to: page.path,
    // children:
    //   page.body?.toc?.links?.map((link: TocLink) => ({
    //     label: link.text,
    //     to: `${page.path}#${link.id}`,
    //   })) || [],
  }));
});
</script>

<template>
  <div
    class="px-0 sm:px-2 md:px-4 lg:px-6 xl:px-8 py-8 flex gap-4 md:gap-8 lg:gap-12 scroll-auto"
    :class="{ 'numbered-lines': hasLineNumbers }"
  >
    <div class="hidden md:block">
      <div class="shrink-0 sticky top-32">
        <UNavigationMenu :items="navigationItems" orientation="vertical" />
        <div id="toc-teleport" />
      </div>
    </div>

    <div class="md:hidden">
      <UPopover :content="{ side: 'right', align: 'start' }" class="sticky top-32">
        <UButton icon="i-lucide-menu" color="neutral" variant="subtle" />

        <template #content>
          <UNavigationMenu :items="navigationItems" orientation="vertical" />
        </template>
      </UPopover>
    </div>

    <slot />
  </div>
</template>
