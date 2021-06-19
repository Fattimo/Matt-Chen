<template>
  <div id="title" class="w-screen-1/2 bg-indigo-300">
    <div id="background-wrapper" class="absolute">
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
      >
        <img
          class="object-cover min-w-full min-h-full max-w-none flex-shrink-0"
          style="height: 0px"
          :src="require(`~/assets/images/${imgSlug}`)"
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
    header: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    imgSlug() {
      if (this.header.img === undefined) {
        return 'me.jpg'
      }
      return this.header.img
    },
  },
}
</script>
