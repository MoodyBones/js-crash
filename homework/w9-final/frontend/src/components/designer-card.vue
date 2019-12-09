<script>
import StarIcon from 'vue-ionicons/dist/ios-star-outline.vue'

export default {
  name: 'DesignerCard',
  props: ['designer'],
  computed: {
    designerUrl() {
      return `/designer/${this.designer._id}`
    }
  },
  components: {
    StarIcon
  }
}
</script>

<template lang="pug">
  article.card
    img(:src="`https://picsum.photos/300/200?random=${designer._id}`", alt="")
    div.card-container
      h3.card-title
        router-link(:to="designerUrl") {{ designer.name }} 
      span.card-location {{ designer.location[0].name }}
      p.card-skills {{ designer.skills[0].name }} {{ designer.skills[1].name }} {{ designer.skills[2].name }}
    div.card-container-contact
      StarIcon.star-icon
</template>

<style scoped>
.card {
  display: inline-block;
  text-align: left;
  /* border: 1px solid #ddd; */
  border-radius: 20px;
  overflow: hidden;
  margin: 20px;
  min-width: 200px;
  background-color: white;
}

.card img {
  margin: 0;
}

.card-container {
  padding: 2rem 1.5rem;
}

.card-title {
  text-transform: uppercase;
}

.card-location {
  font-weight: 200;
  font-size: 2.5rem;
  font-family: var(--font-second);
}

.card-skills {
  color: var(--grey-dark);
  font-weight: bold;
}

.card-container-contact {
  background: var(--black-ish);
  padding: 1rem 1.5rem 0.5rem;
  text-align: center;
}

.star-icon {
  color: white;
  font-size: 2rem;
}

</style>
