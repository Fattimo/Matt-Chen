<template>
  <div
    class="
      flex
      md:absolute
      z-40
      font-heading
      top-14
      fixed
      w-full
      justify-around
    "
  >
    <div class="absolute w-screen md:hidden pb-24 -top-14 -z-10 bg-light"></div>
    <HeaderLogo :font-color="logoColorFromPage" :dimmed="leftScrolled" />
    <HeaderTabs
      :color="tabsColorFromPage"
      :bg-color="tabsBackgroundColorFromPage"
      :page="page"
      :expanded="!rightScrolled"
      :hidden="rightHidden"
      @toggle="toggleRight()"
    />
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
  data() {
    return {
      leftScrolled: false,
      rightScrolled: false,
      rightHidden: false,
    }
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
    tabsColorFromPage() {
      switch (this.page) {
        case 1:
        case 2:
          return 'light'
        case 3:
          return 'primary'
        default:
          return 'dark'
      }
    },
    tabsBackgroundColorFromPage() {
      switch (this.page) {
        case 2:
          return 'bg-primary'
        case 4:
          return 'bg-secondary'
        case 1:
          return 'bg-dark'
        default:
          return 'bg-light'
      }
    },
  },
  watch: {
    page() {
      this.computeScrollState()
    },
  },
  beforeMount() {
    const contents = [
      document.getElementById('works_nav'),
      document.getElementById('works_ext'),
      document.getElementById('about'),
      document.getElementById('contact'),
    ]
    contents.forEach((content, page) => {
      if (content) {
        content.addEventListener('scroll', this.handleScroll(page))
      }
    })
  },
  beforeDestroy() {
    const contents = [
      document.getElementById('works_nav'),
      document.getElementById('works_ext'),
      document.getElementById('about'),
      document.getElementById('contact'),
    ]
    contents.forEach((content, page) => {
      if (content) {
        content.removeEventListener('scroll', this.handleScroll(page))
      }
    })
  },
  methods: {
    getLeftDisplayedElement() {
      switch (this.page) {
        case 1:
          return document.getElementById('works_nav')
        case 2:
          return document.getElementById('works_ext')
        case 3:
          return document.getElementById('about')
        default:
          return null
      }
    },
    getRightDisplayedElement() {
      switch (this.page) {
        case 1:
          return document.getElementById('works_ext')
        case 2:
          return document.getElementById('about')
        case 3:
          return document.getElementById('contact')
        default:
          return null
      }
    },
    handleScroll(page) {
      return () => {
        this.computeScrollState()
      }
    },
    computeScrollState() {
      this.leftScrolled = this.getLeftDisplayedElement()?.scrollTop > 50
      this.rightScrolled = this.getRightDisplayedElement()?.scrollTop > 50
      setTimeout(() => {
        this.rightHidden = this.rightScrolled
      }, 500)
    },
    toggleRight() {
      this.rightScrolled = !this.rightScrolled
      if (!this.rightHidden) {
        setTimeout(() => {
          this.rightHidden = this.rightScrolled
        }, 500)
      } else {
        this.rightHidden = this.rightScrolled
      }
    },
  },
}
</script>
