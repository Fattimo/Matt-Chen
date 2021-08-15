<template>
  <div class="font-body">
    <Toggle :enabled.sync="isRecruiterMode">
      <template #right>Personal Mode</template>
      <template #left>Recruiter Mode</template>
    </Toggle>
    <slot v-if="!isRecruiterMode" name="personal" />
    <slot v-if="isRecruiterMode" name="recruiter" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRecruiterMode: true,
    }
  },
}
</script>
