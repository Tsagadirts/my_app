<template>
  <div id="app">
    <nav>
      <router-link to="/">Users</router-link> |
      <router-link to="/Posts">Posts</router-link> |
      <router-link to="/Post">Post</router-link>|
      <routerLink to="/BitCoin">Bitcoin</routerLink>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
 height: 100vh;
}

nav {
  padding: 30px;
  font-size: 30px;
  font-family: 'Times New Roman', Times, serif;
}

nav a {
  font-weight: bold;
  color: #095416;
  
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
