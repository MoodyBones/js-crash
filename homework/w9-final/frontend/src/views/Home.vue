<script>
// @ is an alias to /src
import DesignerCard from '@/components/designer-card.vue'
import { mapState, mapActions } from 'vuex' // this helps us to read from /store
import image from '@/assets/women-man-couch.jpg';


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
  },
  data: function () {
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
    designer-card(v-for="designer in designers", :designer="designer")
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

</style>