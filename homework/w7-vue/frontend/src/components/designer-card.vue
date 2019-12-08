<script>
export default {
  name: 'DesignerCard',
  props: ['designer'],
  computed: {
    designerUrl() {
      return `/designer/${this.designer._id}`
    }
  }
}
</script>

<template lang="pug">
  article.card
    h2.card-title
      router-link(:to="designerUrl") {{ designer.name }} 
    span {{ designer.website }}
</template>

<style scoped>
.card {
  border-bottom: 1px solid grey;
  text-align: left;
}
.card-title {
  color: grey;
}
</style>
