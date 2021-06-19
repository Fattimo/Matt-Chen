<template>
  <div class="container">
    <div id="wrapper" class="flex flex-grow">
      <!-- <TitleCarousel :page="page" :headers="pageHeaders" /> -->
      <div class="w-screen-1/2 z-10">
        <div
          class="duration-500 ease-out"
          style="height: 150vh"
          :style="pageTranslationY"
        >
          <div class="half-screen-content bg-red-300">
            <TitleCarouselSlide :header="pageHeaders[0]" />
          </div>
          <div class="half-screen-content bg-pink-300">
            <TitleCarouselSlide :header="pageHeaders[1]" />
          </div>
          <div class="half-screen-content bg-yellow-300">
            <TitleCarouselSlide :header="pageHeaders[2]" />
          </div>
        </div>
      </div>
      <div class="w-screen-1/2 z-0">
        <div
          class="inline-flex duration-500 ease-out"
          style="width: 150vw"
          :style="pageTranslationX"
        >
          <div class="half-screen-content bg-indigo-300 pt-32 px-8">
            <article class="prose">
              <nuxt-content :document="pageContents[0]" />
            </article>
          </div>
          <div class="half-screen-content bg-green-300 pt-32 px-8">
            <article class="prose">
              <nuxt-content :document="pageContents[1]" />
            </article>
          </div>
          <div class="half-screen-content bg-blue-300 pt-32 px-8">
            <article class="prose">
              <nuxt-content :document="pageContents[2]" />
            </article>
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
    pageTranslationX() {
      return `transform:translate(-${50 * this.page}vw, 0px)`
    },
    pageTranslationY() {
      return `transform:translate(0px, -${100 * this.page}vh)`
    },
    pageHeaders() {
      return this.pageContents.map((page) => {
        return {
          title: page.title,
          description: page.description,
          img: page.img,
        }
      })
    },
  },
}
</script>

<style>
.container {
  @apply max-h-screen text-center mx-auto overflow-hidden;
}

.half-screen-content {
  @apply w-screen-1/2 flex-col min-h-screen text-left;
}

.flex-center {
  @apply flex justify-center items-center;
}

#background-wrapper {
  padding: 15.625vw 6.25vw 6.25vw;
}
</style>
