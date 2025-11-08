[Vue docs (Props Validation)](https://vuejs.org/guide/components/props#prop-validation)

```vue /validator/ /status/ /rating/
<script setup lang="ts">
type Status = 'draft' | 'published' | 'archived';

defineProps({
  title: {
    type: String, // Basic type check
    required: true,
  },

  content: {
    type: [String, Number], // Multiple possible types
    required: true,
  },

  status: {
    type: PropType<Status>,
    default: 'published',
    validator: (value: Status) => {
      return ['draft', 'published', 'archived'].includes(value);
    },
  },

  rating: {
    type: Number,
    validator: (value: number) => {
      return value >= 0 && value <= 5;
    },
  },
});
</script>
```

When prop validation fails, Vue will produce a console warning (if using the development build).
