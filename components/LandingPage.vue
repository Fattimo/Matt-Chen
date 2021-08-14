<template>
  <div id="title" class="w-screen overflow-hidden">
    <div
      id="background-wrapper"
      class="absolute w-screen h-screen overflow-hidden"
    >
      <div
        class="
          absolute
          inset-y-0
          -right-20
          my-auto
          overflow-hidden
          flex
          justify-center
          items-center
          z-20
        "
      >
        <CircleImageBackground />
        <CircleImage />
      </div>
      <div
        class="
          absolute
          inset-y-0
          left-12
          my-auto
          overflow-hidden
          flex
          justify-center
          items-center
        "
      >
        <CircleLarge />
        <CircleRotatingText>Hello I'm Matt!!</CircleRotatingText>
      </div>
      <div class="absolute inset-y-0 left-64 z-30 h-screen flex items-center">
        <div class="text-left font-heading">
          <h1 class="text-7xl p-2 m-1 w-max">Hello!! <br />I'm Matt</h1>
          <p class="p-2 m-1 w-max text-3xl">
            I like to make <br />
            full-stack web apps<br />
            <br />
            <span @click="nextPage()">Click here to learn more!</span>
          </p>
        </div>
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
