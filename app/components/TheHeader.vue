<script setup lang="ts">
const { items } = defineProps<{ items: { label: string; to: string }[] }>();

const route = useRoute();
const { currentFrameworks, hasLineNumbers } = useSettings();

const isScrolled = ref(false);
let lastScrollY = 0;

onMounted(() => {
  const handleScroll = () => {
    const scrollThreshold = 100;
    const currentScroll = window.scrollY;

    // Only update if scroll direction is away from threshold
    if (currentScroll >= scrollThreshold && !isScrolled.value && currentScroll > lastScrollY) {
      isScrolled.value = true;
    } else if (currentScroll < scrollThreshold - 50 && isScrolled.value && currentScroll < lastScrollY) {
      isScrolled.value = false;
    }

    lastScrollY = currentScroll;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // "passive: true" lets the browser know the listener won't cancel scrolling, improving scroll performance and smoothness.

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

const currentPageTitle = computed(() => {
  const currentPage = items?.find((item) => item.to === route.path);
  return currentPage?.label as string | undefined;
});
</script>

<template>
  <nav class="sticky top-0 z-50">
    <header
      :class="[isScrolled ? 'h-12' : 'h-24']"
      class="the-header transition-all duration-300 ease-in-out flex justify-between px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 backdrop-blur-sm"
    >
      <div class="flex items-center">
        <NuxtLink
          to="/"
          class="shrink-0 uppercase font-bold text-primary flex gap-1 max-md:flex-col transition-all"
          :class="[isScrolled ? 'leading-2 text-sm' : 'leading-3 md:text-lg text-base']"
        >
          <span>Side</span>
          <span>by</span>
          <span>side</span>
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        <FrameworkSelector :name="currentFrameworks[0]!" :is-small="isScrolled" />
        <FrameworkSelector :name="currentFrameworks[1]!" :is-small="isScrolled" />
      </div>

      <div class="flex items-center gap-2 lg:gap-4 max-sm:gap-0">
        <USwitch v-model="hasLineNumbers" label="#" size="xl" unchecked-icon="" checked-icon="i-lucide-check" />
        <UColorModeButton size="xl" />
      </div>
    </header>
    <div class="w-full h-px bg-linear-to-l from-inverted/5 via-inverted/20 to-inverted/5" />
    <LocalNav :items :current-page-title="currentPageTitle" class="xl:hidden" />
  </nav>
</template>

<style scoped>
.the-header {
  background: linear-gradient(
    180deg,
    rgb(from var(--ui-bg-elevated) r g b / 100%) 0%,
    rgb(from var(--ui-bg-elevated) r g b / 30%) 85%,
    rgb(from var(--ui-bg-elevated) r g b / 50%) 100%
  );
}
</style>
