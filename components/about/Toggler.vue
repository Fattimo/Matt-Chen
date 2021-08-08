<template>
  <div>
    <Toggle :enabled.sync="isRecruiterMode">
      <template #left>Personal Mode</template>
      <template #right>Recruiter Mode</template>
    </Toggle>
    <slot v-if="!isRecruiterMode" name="personal" />
    <slot v-if="isRecruiterMode" name="recruiter" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRecruiterMode: false,
    }
  },
}
</script>
