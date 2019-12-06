<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapActions } from 'vuex' // this helps us to read from /store

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapActions(['fetchDesigners'])
  },
  created() {
    this.fetchDesigners()
  }
}
</script>



<template lang='pug'>
  main
    h2 Hello World
    div {{ counter }}
</template>


