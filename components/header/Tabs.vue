<template>
  <div
    class="
      flex flex-end
      md:flex-row
      flex-col-reverse
      min-h-screen
      md:min-h-0
      md:w-screen-1/2
      md:items-center
      items-end
      justify-between
      overflow-hidden
    "
    :class="fontColor"
  >
    <div
      class="absolute md:w-screen-1/2 hidden md:block pb-28 -top-14 -z-10"
      :class="{
        [bgColor]: true,
        'animate-fade-out': !expanded,
        'animate-fade-in': expanded,
        invisible: page === 0 || hidden || !manuallyToggled,
      }"
    ></div>
    <div class="overflow-hidden flex-grow ml-12">
      <div
        class="
          flex
          md:flex-row
          flex-col
          justify-around
          items-center
          flex-grow
          min-h-full
        "
        :class="{
          'animate-slide-right': !expanded,
          'animate-return-right': expanded,
          invisible: hidden,
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
      class="hamburger hamburger--elastic md:mr-12"
      :class="expanded ? 'is-active' : ''"
      type="button"
      @click="toggle"
    >
      <span class="hamburger-box">
        <span :class="burgerColor">
          <span class="hamburger-inner"></span>
        </span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'text-dark',
    },
    bgColor: {
      type: String,
      default: 'bg-transparent',
    },
    expanded: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    page: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      manuallyToggled: false,
    }
  },
  computed: {
    fontColor() {
      switch (this.color) {
        case 'light':
          return 'text-light'
        case 'primary':
          return 'text-primary'
        case 'secondary':
          return 'text-secondary'
        default:
          return 'text-dark'
      }
    },
    burgerColor() {
      switch (this.color) {
        case 'light':
          return 'bg-light'
        case 'primary':
          return 'bg-primary'
        case 'secondary':
          return 'bg-secondary'
        default:
          return 'bg-dark'
      }
    },
  },
  methods: {
    setPage(params) {
      this.manuallyToggled = false
      if (params !== this.$route.path) {
        this.$router.push(params)
      }
    },
    toggle() {
      // if it was expanded, we are untoggling.
      this.$emit('toggle')
      this.manuallyToggled = !this.expanded
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
