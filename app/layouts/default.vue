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
  <div>
    <TheHeader :items="navigationItems" />

    <div
      class="px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 mb-24 flex gap-4 md:gap-8 lg:gap-12 w-full"
      :class="{ 'numbered-lines': hasLineNumbers }"
    >
      <div class="hidden xl:block">
        <div class="shrink-0 sticky top-32">
          <UNavigationMenu :items="navigationItems" orientation="vertical" />
          <div id="toc-teleport" />
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>
