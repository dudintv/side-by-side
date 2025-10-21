<script setup lang="ts">
const { currentFrameworks, hasLineNumbers } = useSettings();
</script>

<template>
  <UHeader class="h-24" :toggle="false">
    <template #title>
      <div class="flex items-center">
        <NuxtLink
          to="/"
          class="text-lg max-md:text-base shrink-0 uppercase font-bold mr-6 md:mr-10 lg:mr-16 leading-3 text-primary flex gap-1 max-md:flex-col"
        >
          <span>Side</span>
          <span>by</span>
          <span>side</span>
        </NuxtLink>
        <div class="flex items-center gap-4 md:gap-8 lg:gap-12">
          <FrameworkSelector :name="currentFrameworks[0]!" />
          <FrameworkSelector :name="currentFrameworks[1]!" />
        </div>
      </div>
    </template>

    <template #right>
      <div
        class="flex items-center gap-2 lg:gap-4 max-sm:flex-col max-sm:gap-0 max-sm:items-end"
      >
        <USwitch
          v-model="hasLineNumbers"
          label="#"
          size="xl"
          unchecked-icon=""
          checked-icon="i-lucide-check"
        />
        <UColorModeButton size="xl" />
      </div>
    </template>
  </UHeader>
</template>
