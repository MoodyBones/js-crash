<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M208 448V320h96v128h97.6V256H464L256 64 48 256h62.4v192z"
          /></svg
      ></router-link>
      <router-link class="nav-link" to="/Designer">Designers</router-link>
      <router-link class="nav-link" to="/Location">Location</router-link>
      <router-link class="nav-link" to="/Skills">Skills</router-link>
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
  --orang-red: rgba(253, 114, 114, 1);
  --navy: rgba(24, 44, 97, 1);
  --blue: rgb(74, 90, 211);
  --blue-light: #c7ecee; /* nav link highlight */
  --blue-med: rgba(27, 156, 252, 1);
  --yellow-light: rgba(248, 239, 186, 1);
  --yellow-honey: rgba(234, 181, 67, 1);
  --green: rgba(88, 177, 159, 1);
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
  font-size:
}

#nav-link {
  padding: var(--spacing);
}

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
  background-color: rgb(30, 30, 30);
  color: rgb(118, 118, 118);
}
</style>
