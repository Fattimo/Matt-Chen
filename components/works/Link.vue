<template>
  <div class="bold underline text-xl">
    <router-link :to="slug"><slot /></router-link>
  </div>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: '/',
    },
  },
}
</script>
