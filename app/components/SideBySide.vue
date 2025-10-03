<script setup lang="ts">
const { currentFrameworks, frameworks } = useSettings();
</script>

<template>
  <div
    class="grid grid-rows-[repeat(auto-fit,_minmax(100px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4 md:gap-8 ml:gap-12"
  >
    <template v-for="i in currentFrameworks.length" :key="i">
      <div v-if="currentFrameworks[i - 1] && $slots[currentFrameworks[i - 1]!]">
        <div class="flex gap-2 opacity-50 text-xs mb-2">
          <FrameworkLogo
            :name="currentFrameworks[i - 1]!"
            :size="16"
            class="grayscale-50"
          />
          {{ frameworks[currentFrameworks[i - 1]!].name }}
          {{ frameworks[currentFrameworks[i - 1]!].versions[0] }}
        </div>
        <slot :name="currentFrameworks[i - 1] || 'default'" />
      </div>
    </template>
  </div>
</template>
