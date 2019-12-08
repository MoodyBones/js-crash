<script>
export default {
  name: 'DesignerCard',
  props: ['designer']
}
</script>

<template lang="pug">
  article.container
    h3.name {{ designer.name }} 
    div.website {{ designer.website }}
</template>

<style scoped>
.container {
  border-bottom: 1px solid grey;
  text-align: left;
}
.name {
  color: grey
}
</style>