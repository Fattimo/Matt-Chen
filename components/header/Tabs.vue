<template>
  <div
    class="
      flex flex-end flex-col-reverse
      md:flex-row md:w-screen-1/2 md:items-center
      items-end
      justify-between
      overflow-hidden
      pt-1
      md:pt-0
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
    <!-- todo: replace this one with an actual mobile header -->
    <div class="overflow-hidden flex-grow ml-12 md:hidden">
      <div
        class="
          flex flex-col flex-grow
          md:flex-row md:bg-transparent md:p-0
          justify-around
          items-center
          min-h-full
          bg-light
          p-4
        "
        :class="{
          'animate-slide-right': !expanded,
          'animate-return-right': expanded,
          invisible: hidden,
          hidden: hidden,
          //[burgerColorFromPage]: !rightHidden,
        }"
      >
        <WorksLink slug="works_nav">My Works</WorksLink>
        <WorksLink slug="about">About Me</WorksLink>
        <WorksLink slug="contact">Contact Me</WorksLink>
      </div>
    </div>
    <div class="overflow-hidden flex-grow ml-12 md:block hidden">
      <div
        class="
          flex flex-col flex-grow
          md:flex-row md:p-0 md:bg-transparent
          justify-around
          items-center
          min-h-full
          bg-light
          p-4
        "
        :class="{
          'animate-slide-right': !expanded,
          'animate-return-right': expanded,
          invisible: hidden,
          hidden: hidden,
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
        <span class="bg-dark" :class="burgerColor">
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
          return 'md:text-light'
        case 'primary':
          return 'md:text-primary'
        case 'secondary':
          return 'md:text-secondary'
        default:
          return 'md:text-dark'
      }
    },
    burgerColor() {
      switch (this.color) {
        case 'light':
          return 'md:bg-light'
        case 'primary':
          return 'md:bg-primary'
        case 'secondary':
          return 'md:bg-secondary'
        default:
          return 'md:bg-dark'
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
