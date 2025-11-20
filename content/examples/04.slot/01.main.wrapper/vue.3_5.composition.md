`ChildComponent.vue`

```vue /slot/
<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
```

`ParentComponent.vue`

```vue /ChildComponent/
<template>
  <ChildComponent>
    <p>Content for the child component's slot.</p>
  </ChildComponent>
</template>
```
