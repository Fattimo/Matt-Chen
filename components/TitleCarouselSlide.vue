<template>
  <div id="title" class="w-screen-1/2 bg-indigo-300">
    <div id="background-wrapper" class="absolute">
      <!-- <div
        class="
          absolute
          inset-0
          max-h-screen
          min-h-screen
          flex-center
          w-screen-1/2
          overflow-hidden
          transform
          duration-500
        "
      >
        <img
          class="
            object-cover
            min-w-full min-h-full
            max-w-none
            flex-shrink-0
            opacity-10
          "
          src="~/assets/images/text_background.png"
        />
      </div> -->
      <div
        class="
          absolute
          inset-0
          max-h-screen
          min-h-screen
          flex-center
          w-screen-1/2
          overflow-hidden
          transform
          duration-1000
        "
        :class="opacityTransform"
      >
        <img
          class="object-cover min-w-full min-h-full max-w-none flex-shrink-0"
          style="height: 800px"
          src="~/assets/images/me.jpg"
        />
      </div>
      <div class="relative text-white text-center">
        <h1
          class="
            text-4xl
            p-2
            m-1
            bg-red-500
            w-max
            bg-opacity-50
            transform
            origin-left
            duration-700
          "
          :class="slideXTransform"
        >
          {{ header.title || '1. About Me' }}
        </h1>
        <p
          class="
            p-2
            m-1
            bg-red-500
            w-max
            text-m
            uppercase
            tracking-wide
            bg-opacity-50
            transform
            origin-top
            duration-500
          "
          :class="slideYTransform"
        >
          {{ header.description || 'its just happy' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 0,
    },
    header: {
      type: Object,
      default: () => {},
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    slideXTransform() {
      return this.active ? 'delay-1000' : 'scale-x-0 delay-500'
    },
    slideYTransform() {
      return this.active ? 'delay-1500' : '-translate-y-1 scale-y-0'
    },
    opacityTransform() {
      return this.active ? 'delay-1000' : 'opacity-0'
    },
  },
}
</script>
