<template>
  <div id="title" class="md:w-screen overflow-hidden">
    <div
      id="background-wrapper"
      class="
        max-w-screen
        md:w-screen
        md:h-screen
        overflow-hidden
        flex flex-col
        md:flex-row
        relative
        pb-12
        md:pb-0
      "
    >
      <div
        class="
          absolute
          inset-y-0
          -right-8
          md:right-48
          2xl:right-auto
          my-auto
          md:overflow-hidden
          flex
          justify-center
          items-center
        "
      >
        <CircleLarge />
        <CircleRotatingText color="primary"
          >Hello I'm Matt!!</CircleRotatingText
        >
      </div>
      <div
        class="
          m-12
          md:ml-20
          lg:ml-64
          z-30
          md:h-screen
          flex
          items-center
          mt-32
          md:mt-0
        "
      >
        <div
          class="
            flex flex-col
            md:items-start
            items-end
            text-right
            md:text-left
            font-heading
            mt-16
            md:mt-0
          "
        >
          <h1 class="text-7xl w-max">Hello!! <br />I'm Matt</h1>
          <p class="p-3w-max text-2xl font-body">
            I like to make <br />
            full-stack web apps<br />
            <br />
            <span
              class="font-heading cursor-pointer hover:underline text-3xl"
              @click="nextPage()"
              >Click here to learn more!</span
            >
          </p>
          <p class="text-xs pt-4">Last Updated: 09/19/2021. Currently WIP</p>
        </div>
      </div>
      <div
        class="
          relative
          my-auto
          overflow-hidden
          flex
          self-end
          justify-center
          items-center
          z-20
          flex-shrink-0
        "
      >
        <CircleImageBackground />
        <CircleImage />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$router.push('works')
    },
  },
}
</script>
