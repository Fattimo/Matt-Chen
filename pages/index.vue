<template>
  <Header>
    <template #default="{ page }">
      <Content :page="page" :page-contents="pageContents" />
    </template>
  </Header>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pageContents = await Promise.all([
      $content('about').fetch(),
      $content('works-desc').fetch(),
      $content('contact').fetch(),
    ])
    return { pageContents }
  },
}
</script>
