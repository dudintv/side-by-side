<script setup lang="ts">
import type { ExamplesCollectionItem } from '@nuxt/content';
import { onBeforeRouteUpdate } from 'vue-router';

type ExampleDocs = Record<string, Record<string, ExamplesCollectionItem>>;

const route = useRoute();

const { data: page } = await useAsyncData(() =>
  queryCollection('topics').path(`/topics/${route.params.topic}`).first()
);
const { data: examples } = await useAsyncData(() => {
  console.log('route.params.topic =', route.params.topic);
  return queryCollection('examples')
    .where('path', 'LIKE', `/examples/${route.params.topic}/%`)
    .all();
});

// const experiment = computed(() => {
//   if (!examples.value) {
//     return [];
//   }

//   return examples.value
//     .filter((doc) => doc.path.match(/main/))
//     .reduce((result, doc) => {
//       return { ...result, x: doc.path };
//     }, {});
// });

const examplesData = computed<{
  main: ExampleDocs;
  other: ExampleDocs;
}>(() => {
  if (!examples.value) {
    return {
      main: {},
      other: {},
    };
  }

  const mainExamples = examples.value
    .filter((doc) => doc.path.match(/main/))
    .reduce((structuredExamples, doc) => {
      const [_, variantName, flavors] = doc.path.match(
        /main\.?([^/]*)\/(.*)/
      ) as [string, string, string];
      structuredExamples[variantName] ??= {};
      structuredExamples[variantName][flavors] = doc;
      return structuredExamples;
    }, {} as ExampleDocs);

  console.log(
    '+++ doc.paths =',
    examples.value.map((doc) => doc.path)
  );
  const otherExamples = examples.value
    .filter((doc) => !doc.path.match(/main/))
    .reduce((structuredExamples, doc) => {
      const [_, variantName, flavors] = doc.path.match(
        `${route.params.topic}\\/([^/]*)\\/([^/]*)`
      ) as [string, string, string];
      structuredExamples[variantName] ??= {};
      structuredExamples[variantName][flavors] = doc;
      return structuredExamples;
    }, {} as ExampleDocs);

  return {
    main: mainExamples,
    other: otherExamples,
  };
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});

definePageMeta({
  key: (route) => {
    console.log('definePageMeta: fullPath =', route.fullPath);
    return route.fullPath;
  },
});

const currentPath = computed(() => route.fullPath);
watch(currentPath, () => {
  console.log('Route changed:', currentPath.value);
  reloadNuxtApp();
});

onBeforeRouteUpdate((to, from) => {
  if (to.params.topic !== from.params.topic) {
    console.log('Route param topic changed:', to.params.topic);
  }
});
</script>

<template>
  <div class="w-full">
    <ContentRenderer v-if="page" :value="page" :data="examplesData" />

    <Teleport to="#toc-teleport">
      <TopicTOC v-if="page" :page="page" />
    </Teleport>
  </div>
</template>
