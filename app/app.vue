<script setup lang="ts"></script>

<template>
  <UApp>
    <TheHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-lucide-columns-2" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">Dmitry Dudin, Frontend Engineer</p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/dudintv"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
