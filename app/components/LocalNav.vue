<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

defineProps<{
  items: NavigationMenuItem[];
  currentPageTitle?: string;
}>();

const isMenuOpen = ref(false);
</script>

<template>
  <div class="flex items-center justify-between">
    <div
      class="flex items-center gap-3 px-4 py-3 my-2 mx-2 backdrop-blur-sm bg-elevated/50 rounded-2xl border border-accented/20"
    >
      <UPopover v-model:open="isMenuOpen" :content="{ side: 'bottom', align: 'start' }">
        <UButton icon="i-lucide-menu" color="neutral" variant="subtle" aria-label="Toggle menu" />

        <template #content>
          <div class="p-2 min-w-60">
            <UNavigationMenu :items="items" orientation="vertical" />
          </div>
        </template>
      </UPopover>

      <span v-if="currentPageTitle" class="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
        {{ currentPageTitle }}
      </span>
    </div>

    <div
      id="local-nav-toc"
      class="flex items-center px-4 py-3 my-2 mx-2 backdrop-blur-sm bg-elevated/50 rounded-2xl border border-accented/20"
    />
  </div>
</template>
