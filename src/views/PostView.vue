<template>
  <div class="post">
    <h1>This is an post page</h1>
    
    <div v-for="post in $route.query.posts" :key="post.id">
      <ul  v-if="post.id === $route.params.id" >
        
        <li>{{post.id}} <img :src="'/assets/' + post.img"/></li>
        <li>{{post.title}}</li>
        <li>{{post.description}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default{
    props: ["posts"]
  }
</script>

// Aidez michel
// Image dans les vues
// Mise en production en ligne le projet Vuejs
// Un petit PDF qui explique ce dernier point particulier
