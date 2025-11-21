<script setup lang="ts">
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
</script>

<template>
  <UHeader :class="[isScrolled ? 'h-12' : 'h-24', 'transition-all duration-300 ease-in-out']" :toggle="false">
    <template #title>
      <div class="flex items-center">
        <NuxtLink
          to="/"
          class="shrink-0 uppercase font-bold mr-6 md:mr-10 lg:mr-16 text-primary flex gap-1 max-md:flex-col transition-all"
          :class="[isScrolled ? 'leading-2 text-sm' : 'leading-3 md:text-lg text-base']"
        >
          <span>Side</span>
          <span>by</span>
          <span>side</span>
        </NuxtLink>
      </div>
    </template>

    <div class="flex items-center gap-4 md:gap-8 lg:gap-12 flex-1 w-full">
      <FrameworkSelector :name="currentFrameworks[0]!" class="w-1/2" :isSmall="isScrolled" />
      <FrameworkSelector :name="currentFrameworks[1]!" class="w-1/2" :isSmall="isScrolled" />
    </div>

    <template #right>
      <div class="flex items-center gap-2 lg:gap-4 max-sm:flex-col max-sm:gap-0 max-sm:items-end">
        <USwitch v-model="hasLineNumbers" label="#" size="xl" unchecked-icon="" checked-icon="i-lucide-check" />
        <UColorModeButton size="xl" />
      </div>
    </template>
  </UHeader>
</template>
