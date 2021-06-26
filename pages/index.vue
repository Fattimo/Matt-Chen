<template>
  <div>
    <Header :page="page" />
    <nuxt-child :page="page" :page-contents="pageContents" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pageContents = await Promise.all([
      $content('about').fetch(),
      $content('works-desc').fetch(),
      $content('contact').fetch(),
    ])
    return { pageContents }
  },
  computed: {
    page() {
      switch (this.$route.path) {
        case '/works':
          return 1
        case '/contact':
          return 2
        default:
          return 0
      }
    },
  },
}
</script>
