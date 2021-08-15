<template>
  <div class="font-bold underline text-3xl tracking-wider font-heading mb-2">
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
