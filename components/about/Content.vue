<template>
  <fieldset class="border-t border-solid border-gray-300 px-3 font-body">
    <legend class="mx-auto px-4 font-heading"><slot name="header" /></legend>
    <slot name="body" />
  </fieldset>
</template>
