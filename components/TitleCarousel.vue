<template>
  <div class="z-10">
    <div
      v-for="(header, index) in headers"
      :key="header.title"
      :class="page === index ? 'z-10' : 'z-0'"
    >
      <title-carousel-slide
        :header="header"
        :page="page"
        :active="page === index"
      />
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
    headers: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
