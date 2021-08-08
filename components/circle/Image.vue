<template>
  <div
    class="
      absolute
      2xl:w-120
      2xl:h-120
      lg:w-96
      lg:h-96
      w-48
      h-48
      rounded-full
      flex-center
      overflow-hidden
      z-20
    "
  >
    <img
      class="object-cover min-w-full min-h-full max-w-none flex-shrink-0"
      style="height: 0px"
      :src="require('~/assets/images/me.jpg')"
    />
  </div>
</template>
