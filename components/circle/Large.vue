<template>
  <div
    class="
      2xl:w-280
      2xl:h-280
      lg:w-320
      lg:h-320
      w-48
      h-48
      border-100
      rounded-full
      z-10
    "
    :class="color"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'border-secondary',
    },
  },
}
</script>
