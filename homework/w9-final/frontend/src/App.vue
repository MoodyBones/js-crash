<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Designer">Designers</router-link>
      <router-link to="/">Location</router-link>
      <router-link to="/">Skills</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <footer id="footer">
      <p>&#169; 2009 Mel Jones</p>
    </footer>
  </div>
</template>

<style>
:root {
  --font-main: 'Raleway', sans-serif;
  --font-second: 'Montserrat', sans-serif;
  --orange: #f0932b;
  --white-ish: #f2f2f2;
  --black-ish: #0f1108;
  --grey-dark: rgb(89, 89, 89);
  --blue: rgb(74, 90, 211);
  --blue-light: #c7ecee;
}

#app {
  font-family: var(--font-main);
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
  font-family: var(--font-mono)
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

#footer {
  padding: 30px 20px 40px 20px;
  background-color: rgb(30, 30, 30);
  color: rgb(118, 118, 118);
  font-family: var(--font-mono)
}
</style>
