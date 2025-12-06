<script setup lang="ts">
const { items, currentPageTitle = '' } = defineProps<{
  items: { label: string; to: string }[];
  currentPageTitle?: string;
}>();

const currentIndex = computed(() => items.findIndex((item) => item.label === currentPageTitle));

const previous = computed(() => (currentIndex.value > 0 ? items[currentIndex.value - 1] : null));
const next = computed(() => (currentIndex.value < items.length - 1 ? items[currentIndex.value + 1] : null));

const isHovered = ref(false);
</script>

<template>
  <div class="flex items-center justify-between m-2 md:m-4 lg:m-6">
    <div class="flex gap-2">
      <UTooltip :text="`Previous topic: ${previous.label}`">
        <UButton
          v-if="previous"
          :to="previous.to"
          icon="i-lucide-chevron-left"
          color="neutral"
          variant="soft"
          :aria-label="`Previous topic: ${previous.label}`"
          class="px-4 py-3 backdrop-blur-sm bg-elevated/50 rounded-2xl border border-accented/20"
        />
      </UTooltip>
      <UPopover :content="{ side: 'bottom', align: 'start' }">
        <UButton
          icon="i-lucide-menu"
          color="neutral"
          variant="soft"
          aria-label="Toggle menu"
          class="px-4 py-3 backdrop-blur-sm bg-elevated/50 rounded-2xl border border-accented/20 cursor-pointer"
        >
          <span v-if="currentPageTitle" class="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
            {{ currentPageTitle }}
          </span>
        </UButton>

        <template #content="{ close }">
          <div class="p-2 min-w-60">
            <UNavigationMenu :items="items" orientation="vertical" @click="close" />
          </div>
        </template>
      </UPopover>
      <UTooltip :text="`Next topic: ${next.label}`">
        <UButton
          v-if="next"
          :to="next.to"
          icon="i-lucide-chevron-right"
          color="neutral"
          variant="soft"
          :aria-label="`Next topic: ${next.label}`"
          class="px-4 py-3 backdrop-blur-sm bg-elevated/50 rounded-2xl border border-accented/20"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
          >{{ isHovered ? next.label : '' }}</UButton
        >
      </UTooltip>
    </div>

    <div id="local-nav-toc" />
  </div>
</template>
