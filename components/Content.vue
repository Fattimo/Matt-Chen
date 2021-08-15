<template>
  <div class="max-h-screen w-screen text-center overflow-hidden flex">
    <div
      class="inline-flex duration-700 ease-in-out"
      style="width: 300vw"
      :style="pageTranslationX"
    >
      <div class="w-screen bg-light z-20">
        <LandingPage />
      </div>
      <div
        :key="portfolio.title"
        class="half-screen-content pt-32 pb-12 z-10 relative overflow-x-hidden"
        :class="getBgColor(portfolio.color)"
      >
        <CirclePortfolio />
        <article
          class="prose prose-lg z-20 px-12"
          :class="getTextColor(portfolio.font)"
        >
          <nuxt-content :document="portfolio" />
        </article>
      </div>
      <div
        v-for="content in pageContents"
        :key="content.title"
        class="half-screen-content pt-32 px-12 pb-12 z-10"
        :class="getBgColor(content.color)"
      >
        <article class="prose prose-lg" :class="getTextColor(content.font)">
          <nuxt-content :document="content" />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 0,
    },
    pageContents: {
      type: Array,
      default: () => [],
    },
    portfolio: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    pageTranslationX() {
      return this.page > 0
        ? `transform:translate(-${50 * this.page + 50}vw, 0px)`
        : ''
    },
  },
  methods: {
    getBgColor(color) {
      switch (color) {
        case 'primary':
          return 'bg-primary'
        case 'secondary':
          return 'bg-secondary'
        case 'light':
          return 'bg-light'
        default:
          return 'bg-dark'
      }
    },
    getTextColor(color) {
      switch (color) {
        case 'primary':
          return 'prose-primary'
        case 'secondary':
          return 'prose-secondary'
        case 'light':
          return 'prose-light'
        default:
          return 'prose-dark'
      }
    },
  },
}
</script>

<style>
.half-screen-content {
  @apply w-screen-1/2 flex-col min-h-screen text-left overflow-auto;
}

.flex-center {
  @apply flex justify-center items-center;
}

#background-wrapper {
  padding: 15.625vw 6.25vw 6.25vw;
}
</style>
