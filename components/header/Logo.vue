<template>
  <div class="inline md:w-screen-1/2">
    <span
      class="ml-6 md:ml-12 cursor-pointer hover:underline"
      :class="{
        'opacity-30': dimmed,
        [bgColor]: true,
        [fontColor]: true,
      }"
      @click="setPage('/')"
      >Matt Chen Placeholder Logo</span
    >
  </div>
</template>

<script>
export default {
  props: {
    fontColor: {
      type: String,
      default: 'text-dark',
    },
    bgColor: {
      type: String,
      default: 'bg-transparent',
    },
    dimmed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setPage(params) {
      if (params !== this.$route.path) {
        this.$router.push(params)
      }
    },
  },
}
</script>
