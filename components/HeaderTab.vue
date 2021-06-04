<template>
  <div
    class="ml-8 text-lg hover:underline hover:cursor-pointer"
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
  },
  emits: ['click'],
}
</script>
