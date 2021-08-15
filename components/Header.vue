<template>
  <div>
    <!-- todo: transition colors -->
    <div class="flex absolute z-40 font-heading">
      <div
        class="inline w-screen-1/2 p-16"
        :class="logoColorFromPage"
        @click="setPage('/')"
      >
        MATT CHEN NUMBER {{ page }}
      </div>
      <div class="flex w-screen-1/2 p-16" :class="tabColorFromPage">
        <header-tab
          name="My Works"
          :selected="page === 1"
          @click="setPage('works')"
        />
        <header-tab
          name="About Me"
          :selected="page === 2"
          @click="setPage('about')"
        />
        <header-tab
          name="Contact Me"
          :selected="page === 3"
          @click="setPage('contact')"
        />
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
  computed: {
    logoColorFromPage() {
      switch (this.page) {
        case 3:
        case 2:
          return 'text-light'
        default:
          return 'text-dark'
      }
    },
    tabColorFromPage() {
      switch (this.page) {
        case 1:
        case 2:
          return 'text-light'
        case 3:
          return 'text-primary'
        default:
          return 'text-dark'
      }
    },
  },
  methods: {
    setPage(params) {
      this.$router.push(params)
    },
  },
}
</script>
