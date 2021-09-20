<template>
  <div
    class="
      2xl:w-360 2xl:h-360
      lg:w-480 lg:h-480
      w-440
      h-440
      z-10
      font-heading
      sm:opacity-100
      opacity-50
    "
    :class="fontColor"
  >
    <svg viewBox="0 0 200 200" class="animate-spin-slow">
      <path
        id="curve"
        fill="transparent"
        d="
          M 100, 100
          m -75, 0
          a 75,75 0 0,1 150,0
          a 75,75 0 0,1 -150,0
        "
      />
      <text width="200" class="fill-current">
        <textPath alignment-baseline="top" xlink:href="#curve">
          <slot />
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'secondary',
    },
  },
  computed: {
    fontColor() {
      return this.color === 'secondary' ? 'text-secondary' : 'text-primary'
    },
  },
}
</script>
