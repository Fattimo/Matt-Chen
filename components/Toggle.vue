<template>
  <div class="flex w-full">
    <!-- https://codepen.io/lhermann/pen/EBGZRZ -->
    <label
      for="toggleB"
      class="flex items-center justify-between cursor-pointer w-full"
    >
      <!-- label -->
      <slot name="left" />
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input
          id="toggleB"
          type="checkbox"
          class="sr-only"
          :value="enabled"
          @input="$emit('update:enabled', !enabled)"
        />
        <!-- line -->
        <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <!-- dot -->
        <div
          class="
            dot
            absolute
            left-1
            top-1
            bg-white
            w-6
            h-6
            rounded-full
            transition
          "
        ></div>
      </div>
      <!-- label -->
      <slot name="right" />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:enabled'],
}
</script>

<style>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>
