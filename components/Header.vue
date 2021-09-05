<template>
  <div>
    <!-- todo: transition colors -->
    <div class="flex absolute z-40 font-heading top-14">
      <div class="inline w-screen-1/2" @click="setPage('/')">
        <span
          class="ml-12 cursor-pointer hover:underline"
          :class="{
            'opacity-30': leftScrolled,
            [logoColorFromPage]: 1,
          }"
          >Matt Chen Placeholder Logo</span
        >
      </div>
      <div
        class="
          flex flex-end
          w-screen-1/2
          items-center
          justify-between
          overflow-hidden
        "
        :class="tabColorFromPage"
      >
        <div class="overflow-hidden flex-grow ml-12">
          <div
            class="flex justify-around items-center flex-grow"
            :class="{
              'animate-slide-right': rightScrolled,
              'animate-return-right': !rightScrolled,
              invisible: rightHidden,
              //[burgerColorFromPage]: !rightHidden,
            }"
          >
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
        <button
          class="hamburger hamburger--elastic mr-12"
          :class="!rightScrolled ? 'is-active' : ''"
          type="button"
          @click="toggleRight()"
        >
          <span class="hamburger-box">
            <span :class="burgerColorFromPage">
              <span class="hamburger-inner"></span>
            </span>
          </span>
        </button>
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
    burgerColorFromPage() {
      switch (this.page) {
        case 1:
        case 2:
          return 'bg-light'
        case 3:
          return 'bg-primary'
        default:
          return 'bg-dark'
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
    setPage(params) {
      if (params !== this.$route.path) {
        this.$router.push(params)
      }
    },
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

<style lang="scss">
/* https://jonsuh.com/hamburgers/ */
$hamburger-padding-x: 0px;
$hamburger-padding-y: 0px;
$hamburger-layer-width: 30px;
$hamburger-layer-height: 4px;
$hamburger-layer-spacing: 4px;
$hamburger-layer-color: #000;
$hamburger-layer-border-radius: 4px;
$hamburger-hover-opacity: 0.7;
$hamburger-active-layer-color: $hamburger-layer-color;
$hamburger-active-hover-opacity: $hamburger-hover-opacity;

// To use CSS filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter as true and
// change the value of $hamburger-hover-filter accordingly.
$hamburger-hover-use-filter: false;
$hamburger-hover-filter: opacity(50%);
$hamburger-active-hover-filter: $hamburger-hover-filter;

// Types (Remove or comment out what you don’t need)
$hamburger-types: (elastic);
@import '~/assets/css/_sass/hamburgers/hamburgers.scss';
</style>
