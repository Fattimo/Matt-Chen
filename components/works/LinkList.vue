<template>
  <div>
    <div v-for="work in works" :key="work.slug">
      <works-link :slug="work.slug">{{ work.name }}</works-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    works: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
