<template>
  <div>
    <div class="flex absolute z-40">
      <div class="inline w-screen-1/2 p-16">MATT CHEN NUMBER {{ page }}</div>
      <div class="flex w-screen-1/2 p-16">
        <header-tab name="About Me" @click="setPage(0, 'about')" />
        <header-tab name="My Works" @click="setPage(1, 'works')" />
        <header-tab name="Contact Me" @click="setPage(2, 'contact')" />
      </div>
    </div>
    <slot :page="page"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
    }
  },
  methods: {
    setPage(page, params) {
      this.page = page
      history.pushState({}, null, this.$route.path + encodeURIComponent(params))
    },
  },
}
</script>
