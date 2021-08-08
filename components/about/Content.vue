<template>
  <fieldset class="border-t border-solid border-gray-300 px-3">
    <legend class="mx-auto px-4"><slot name="header" /></legend>
    <slot name="body" />
  </fieldset>
</template>
