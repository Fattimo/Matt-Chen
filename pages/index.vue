<template>
  <div>
    <Header :page="page" />
    <nuxt-child
      :page="page"
      :page-contents="pageContents"
      :portfolio="portfolio"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pageContents = await Promise.all([
      $content('works-nav').fetch(),
      $content('works-desc').fetch(),
      $content('about').fetch(),
      $content('contact').fetch(),
    ])
    const portfolio = pageContents.shift()
    return { portfolio, pageContents }
  },
  computed: {
    page() {
      switch (this.$route.path) {
        case '/works':
          return 1
        case '/about':
          return 2
        case '/contact':
          return 3
        default:
          return 0
      }
    },
  },
}
</script>
