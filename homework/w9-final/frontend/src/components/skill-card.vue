<script>
import StarIcon from 'vue-ionicons/dist/ios-star-outline.vue'

export default {
  name: 'SkillCard',
  props: ['skill'],
  computed: {
    skillUrl() {
      return `/skill/${this.skill._id}`
    }
  },
  components: {
    StarIcon
  }
}
</script>

<template lang="pug">
  article.card
    div.card-container
      h3.card-title
        router-link(:to="skillUrl") {{ skill.name }}
      div.card-icon
        StarIcon#icon
      div.card-names
        p {{ skill.designers[0].name }}   
</template>

<style scoped>
.card {
  border: 1.5px solid var(--lilac);
  margin: 20px;
  min-width: 200px;
}

.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'icon title'
    'extra title';
}

.card-icon {
  grid-area: icon;
  border-bottom: 1.5px solid var(--lilac);
  border-right: 1.5px solid var(--lilac);
}

.card-names {
  grid-area: extra;
  border-right: 1.5px solid var(--lilac);
  padding: var(--spacing);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}

.card-title {
  grid-area: title;
  text-transform: uppercase;
  padding: var(--spacing);
  display: flex;
  justify-content: center;
  align-items: center;
}

#icon {
  color: var(--lilac);
  font-size: 2rem;
  padding: var(--spacing);
}
</style>
