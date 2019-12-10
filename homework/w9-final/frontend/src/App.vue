<script>
import HomeIcon from 'vue-ionicons/dist/md-home.vue'


export default {
  components: {
    HomeIcon
  }
}
</script>

<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/"
        ><span class="nav-link"><HomeIcon id='home-icon' /></span></router-link>
      <router-link to="/Designer"><span class="nav-link">Designers</span></router-link>
      <router-link to="/Location"><span class="nav-link">Location</span></router-link>
      <router-link to="/About"><span class="nav-link">About</span></router-link>
    </nav>
    <router-view />
    <footer id="footer">
      <p>&#169; 2009 Mel Jones</p>
    </footer>
  </div>
</template>

<style>
:root {
  --sans-serif-main: 'Montserrat', sans-serif;
  --sans-serif-head: 'Raleway', sans-serif;
  --serif-main: 'Antic Slab', serif;
  --spacing: 10px;
  --white-ish: #f2f2f2;
  --black-ish: #0f1108;
  --grey-dark: rgba(44, 58, 71, 1);
  --grey-med: rgba(202, 211, 200, 1);
  --lilac: rgba(214, 162, 232, 1);
  --pink-red: rgba(252, 66, 123, 1);
  --orange-red: rgba(253, 114, 114, 1);
  --navy: rgba(24, 44, 97, 1);
  --blue: rgb(74, 90, 211);
  --blue-light: #c7ecee; /* nav link highlight */
  --blue-med: rgba(27, 156, 252, 1);
  --yellow-light: rgba(248, 239, 186, 1);
  --yellow-honey: rgba(234, 181, 67, 1);
  --green: rgba(88, 177, 159, 1);
}

* {
  box-sizing: border-box;
}

#app {
  font-family: var(--sans-serif-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black-ish);
  background-color: var(--white-ish);
}

#nav {
  padding: 30px 20px 40px 20px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* .ion__svg {
  font-size: 1.5rem; // messes with underline on other nav items
} */


a {
  box-shadow: inset 0 -0.5rem 0 0 var(--blue-light);
  transition: box-shadow 0.2s;
}
a.start-offset {
  box-shadow: inset 0 -2.5rem 0 0 var(--blue-light);
}
a:hover {
  box-shadow: inset 0 -0.5rem 0 0 var(--blue-light);
}

a:hover {
  box-shadow: inset 0 -2.5rem 0 0 var(--blue-light);
}

/*other stylessss*/
a {
  color: var(--black-ish);
  text-decoration: none;
}
a:visited {
  color: var(--black-ish);
}


#footer {
  padding: 30px 20px 40px 20px;
  background-color: var(--grey-dark);
  color: var(--grey-med);
}
</style>
