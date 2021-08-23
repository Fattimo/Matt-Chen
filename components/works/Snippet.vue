<template>
  <div :id="name">
    <slot name="header" />
    <slot name="description" />
    <div class="w-12 h-12 bg-red-300"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
