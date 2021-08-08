<template>
  <div>
    <div class="flex absolute z-40">
      <div class="inline w-screen-1/2 p-16" @click="setPage('/')">
        MATT CHEN NUMBER {{ page }}
      </div>
      <div class="flex w-screen-1/2 p-16">
        <header-tab name="My Works" @click="setPage('works')" />
        <header-tab name="About Me" @click="setPage('about')" />
        <header-tab name="Contact Me" @click="setPage('contact')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      default: 0,
      type: Number,
    },
  },
  methods: {
    setPage(params) {
      this.$router.push(params)
    },
  },
}
</script>
