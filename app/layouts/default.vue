<script setup lang="ts">
import type { CommandPaletteGroup, CommandPaletteItem } from '@nuxt/ui';

const { data: pages } = await useAsyncData('topics', () =>
  queryCollection('topics').all()
);

const topics = computed<CommandPaletteItem[]>(() =>
  pages.value!.map((p) => ({
    label: p.meta.menu as string,
    to: p.path,
  }))
);
const groups = computed<CommandPaletteGroup<CommandPaletteItem>[]>(() => [
  {
    id: 'topics',
    items: topics.value,
  },
]);
</script>

<template>
  <UContainer class="py-8 flex gap-4 md:gap-8 lg:gap-12 scroll-auto">
    <div class="hidden md:block">
      <div class="shrink-0 sticky top-32">
        <UCommandPalette :groups="groups" class="" />
        <div id="toc-teleport" />
      </div>
    </div>

    <div class="md:hidden">
      <UPopover
        :content="{ side: 'right', align: 'start' }"
        class="sticky top-32"
      >
        <UButton icon="i-lucide-menu" color="neutral" variant="subtle" />

        <template #content>
          <UCommandPalette :groups="groups" />
        </template>
      </UPopover>
    </div>

    <slot />
  </UContainer>
</template>
