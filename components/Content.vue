<template>
  <div class="container">
    <div id="wrapper" class="flex flex-grow">
      <TitleCarousel :page="page" :headers="pageHeaders" />
      <div class="w-screen-1/2 z-0">
        <div
          class="inline-flex delay-500 duration-700 ease-out"
          style="width: 150vw"
          :style="pageTranslation"
        >
          <div class="half-screen-content bg-indigo-300">
            <nuxt-content :document="pageContents[0]" />
          </div>
          <div class="half-screen-content bg-green-300">
            <nuxt-content :document="pageContents[1]" />
          </div>
          <div class="half-screen-content bg-blue-300">
            <nuxt-content :document="pageContents[2]" />
          </div>
        </div>
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
  },
  computed: {
    pageTranslation() {
      return `transform:translate(-${50 * this.page}vw, 0px)`
    },
    pageHeaders() {
      return this.pageContents.map((page) => {
        return { title: page.title, description: page.description }
      })
    },
  },
}
</script>

<style>
.container {
  @apply min-h-screen flex flex-col justify-center items-center text-center mx-auto overflow-x-hidden;
}

.half-screen-content {
  @apply w-screen-1/2 flex-col min-h-screen pt-32;
}

.flex-center {
  @apply flex justify-center items-center;
}

#background-wrapper {
  padding: 15.625vw 6.25vw 6.25vw;
}
</style>
