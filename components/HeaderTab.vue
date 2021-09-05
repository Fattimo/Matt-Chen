<template>
  <div
    class="text-lg hover:underline hover:cursor-pointer"
    :class="selected ? 'underline' : ''"
    @click="$emit('click')"
  >
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Some Link Here',
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
}
</script>
