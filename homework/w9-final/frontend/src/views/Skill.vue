<script>
// @ is an alias to /src
import SkillCard from '@/components/skill-card.vue'
import { mapState, mapActions } from 'vuex' // this helps us to read from /store

export default {
  name: 'Skill',
  components: {
    SkillCard
  },
  computed: {
    ...mapState(['skill']) // note this says skill not skills!!
  },
  methods: {
    ...mapActions(['fetchSkill']) // new action to fetch ONLY ONE designer
  },
  created() {
    this.fetchSkill(this.$route.params.id) //get the id from the url using $route
  }
}
</script>

<template lang="pug">
  main
    section.skill-container
      skill-card(:skill="skill")
</template>
