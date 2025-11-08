Vue requires you to explicitly declare which props your component accepts using `defineProps()`.

Props are reactive.

Vue props are deeply immutable from the child's perspective. Children should `emit` events back to the parent.
