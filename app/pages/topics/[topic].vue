<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData(() =>
  queryCollection('content').path(`/topics/${route.params.topic}`).first()
);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
