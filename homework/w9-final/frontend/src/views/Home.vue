<script>
// @ is an alias to /src
import DesignerCard from '@/components/designer-card.vue'
import SkillCard from '@/components/skill-card.vue'
import { mapState, mapActions } from 'vuex' // this helps us to read from /store
import image from '@/assets/women-man-couch.jpg'

export default {
  name: 'home',
  components: {
    DesignerCard,
    SkillCard
  },
  computed: {
    ...mapState(['designers', 'skills'])
  },
  methods: {
    ...mapActions(['fetchDesigners', 'fetchSkills'])
  },
  created() {
    this.fetchDesigners()
    this.fetchSkills()
  },
  data: function() {
    return {
      image: image
    }
  }
}
</script>

<template lang="pug">
  main
    header.header-container
      h1.heading-main Untitled <br>Designer <br>Database
      //- img(:src="`https://picsum.photos/300/200?random=${designer._id}`", alt="")
      img(:src="image", alt="", width="1080", height="1013")
    section.designer-container
      designer-card(v-for="designer in designers", :designer="designer")
    section.skill-container
      skill-card(v-for="skill in skills", :skill="skill")
    section.location-container
      p Locations & map to come...
    section.about-container
      div.about-div
        span 
      div.sign-div SIGN <br> UP
</template>

<style scoped>
.header-container {
  background-color: var(--blue);
}

.heading-main {
  font-family: var(--sans-serif-head);
  color: var(--white-ish);
  font-weight: 500;
  font-size: 4rem;
  padding: var(--spacing);
  margin: 0;
  text-align: center;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

.designer-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 30px 10px;
}

.skill-container {
  background-color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 40px 10px;
}

.location-container {
  background-color: var(--blue);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  color: var(--white-ish);
    padding: 40px 10px;
}

.about-container {
  background-color: var(--blue);
  display: flex;
  background-color: var(--pink-red);
  padding: var(--spacing);
}

.about-div {
  flex: 1;
  background-color: white;
  padding: var(--spacing);
  border-radius: 6px;
  color: var(--grey-med);
}

.sign-div {
  background-color: var(--black-ish);
  padding: var(--spacing);
  border-radius: 6px;
  color: var(--grey-med);
  margin-left: var(--spacing);
  text-align: center;
}
</style>
