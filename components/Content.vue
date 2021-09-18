<template>
  <div class="md:max-h-screen md:w-screen text-center overflow-hidden flex">
    <div
      class="flex md:flex-row flex-col duration-700 ease-in-out"
      style="width: 300vw"
      :style="pageTranslationX"
    >
      <div class="md:w-screen bg-light z-20">
        <LandingPage />
      </div>
      <perfect-scrollbar
        v-for="content in pageContents"
        :id="content.id"
        :key="content.title"
      >
        <div
          class="md:half-screen-content pt-16 md:pt-32 px-12 pb-12 z-10"
          :class="getBgColor(content.color)"
        >
          <article class="prose prose-lg" :class="getTextColor(content.font)">
            <nuxt-content :document="content" />
          </article>
        </div>
      </perfect-scrollbar>
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
