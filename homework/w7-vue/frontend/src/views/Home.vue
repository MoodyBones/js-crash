<script>
// @ is an alias to /src
import DesignerCard from '@/components/designer-card.vue'
import { mapState, mapActions } from 'vuex' // this helps us to read from /store

export default {
  name: 'home',
  components: {
    DesignerCard
  },
  computed: {
    ...mapState(['designers', 'counter'])
  },
  methods: {
    ...mapActions(['fetchDesigners', 'incrementCounter'])
  },
  created() {
    this.fetchDesigners()
  }
}
</script>

<template lang="pug">
  main
    button(@click="incrementCounter") Increment 
    div {{ counter }}
    h2 Hello World
    designer-card(v-for="designer in designers", :designer="designer")
</template>
