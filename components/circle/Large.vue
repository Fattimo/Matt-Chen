<template>
  <div
    class="
      absolute
      2xl:w-360 2xl:h-360
      lg:w-320 lg:h-320
      w-280
      h-280
      border-100
      rounded-full
      z-10
      opacity-60
      sm:opacity-100
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
