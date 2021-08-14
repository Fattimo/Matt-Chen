<template>
  <div class="absolute 2xl:w-280 2xl:h-280 lg:w-320 lg:h-320 z-10 font-heading">
    <svg viewBox="0 0 200 200" class="animate-spin-slow">
      <path
        id="curve"
        fill="transparent"
        d="
          M 100, 100
          m -75, 0
          a 75,75 0 0,1 150,0
          a 75,75 0 0,1 -150,0
        "
      />
      <text width="200">
        <textPath alignment-baseline="top" xlink:href="#curve">
          <slot />
        </textPath>
      </text>
    </svg>
  </div>
</template>
