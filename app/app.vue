<script setup lang="ts"></script>

<template>
  <UApp>
    <TheHeader />

    <UMain class="pt-24">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-lucide-columns-2" />

    <UFooter>
      <template #left>
        <UButton to="https://www.linkedin.com/in/dudintv/" target="_blank" color="neutral" variant="ghost">
          <!-- class="text-sm text-muted hover:text-primary" -->
          Dmitry Dudin, Frontend Engineer
        </UButton>
      </template>

      <template #right>
        <UButton
          to="https://github.com/dudintv/side-by-side"
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
