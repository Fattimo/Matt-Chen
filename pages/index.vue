<template>
  <div>
    <HeaderMain :page="page" />
    <nuxt-child :page="page" :page-contents="pageContents" />
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
    return { pageContents }
  },
  data() {
    return {
      page: this.calculatePageFromPath(this.$route.path),
    }
  },
  watch: {
    $route(to, from) {
      // set the page
      this.page = this.calculatePageFromPath(to.path)
      // set the scroll on the hash
      if (process.client) {
        this.scrollToHash(to.hash)
      }
    },
  },
  mounted() {
    this.scrollToHash(this.$route.hash)
  },
  methods: {
    calculatePageFromPath(path) {
      switch (path) {
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
    scrollToHash(hash) {
      if (!hash) {
        return
      }
      const worksBox = document.getElementById('works_ext')
      const hashedObject = document.querySelector(hash)
      if (!worksBox || !hashedObject) {
        return
      }
      worksBox.scrollTo({
        top: hashedObject.offsetTop + hashedObject.offsetParent.offsetTop - 20,
        behavior: 'smooth',
      })
    },
  },
}
</script>
