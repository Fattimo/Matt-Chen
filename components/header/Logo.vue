<template>
  <div class="inline md:w-screen-1/2" @click="setPage('/')">
    <span
      class="ml-12 cursor-pointer hover:underline"
      :class="{
        'opacity-30': dimmed,
        [bgColor]: true,
        [fontColor]: true,
      }"
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
