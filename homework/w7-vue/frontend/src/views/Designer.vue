<script>
// @ is an alias to /src
import DesignerCard from '@/components/designer-card.vue'
import { mapState, mapActions } from 'vuex' // this helps us to read from /store

export default {
  name: 'Designer',
  components: {
    DesignerCard
  },
  computed: {
    ...mapState(['designer']) // note this says designer not designers!!
  },
  methods: {
    ...mapActions(['fetchDesigner']) // new action to fetch ONLY ONE designer
  },
  created() {
    this.fetchDesigner(this.$route.params.id) //get the id from the url using $route
  }
}
</script>

<template lang="pug">
  main
    section
      designer-card(:designer="designer")
</template>
