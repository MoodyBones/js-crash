<script>
import StarIcon from 'vue-ionicons/dist/ios-star-outline.vue'
import MailIcon from 'vue-ionicons/dist/md-mail.vue'

export default {
  name: 'DesignerCard',
  props: ['designer'],
  computed: {
    designerUrl() {
      return `/designer/${this.designer._id}`
    }
  },
  components: {
    StarIcon,
    MailIcon
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
      p.card-description {{ designer.description }}
      p.card-skills {{ designer.skills[0].name }}
    div.card-container-contact
      StarIcon#icon
      MailIcon#icon
</template>

<style scoped>
.card {
  display: inline-block;
  text-align: left;
  /* border: 1px solid #ddd; */
  border-radius: 6px;
  overflow: hidden;
  margin: 20px;
  min-width: 200px;
  background-color: white;
}

.card img {
  margin: 0;
  display: block;
  width: 100%;
  height: auto;
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
  font-family: var(--serif-main);
}

.card-description {
  color: var(--grey-dark);
  font-family: var(--serif-main);
  margin: 30px 0;
}

.card-skills {
  color: var(--grey-dark);
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 0;
}

.card-container-contact {
  border-top: 1px solid var(--white-ish);
  /* background: var(--grey-dark); */
  padding: 1rem 1.5rem 0.5rem;
  text-align: center;
  display: flex;
  justify-content: flex-end;
}

#icon {
  color: var(--orange-red);
  font-size: 2rem;
  padding: var(--spacing);
}
</style>
