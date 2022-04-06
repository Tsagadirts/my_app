<template>
  <div class="post">
    
    <div v-for="post in $route.query.posts" :key="post.id">
      
      <ul  v-if="post.id === $route.params.id" id="post">
        <li>{{post.title}}</li>
        <li><img :src="'/assets/' + post.img"/></li>
        
        <li>{{post.description}}</li>
        <li>{{post.text}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default{
    props: ["posts"]
  }
</script>

<style>
#post{
  list-style-type: none;
}

img{
  width: 400px;
  height: auto;
}
</style>

// Aidez michel
// Image dans les vues
// Mise en production en ligne le projet Vuejs
// Un petit PDF qui explique ce dernier point particulier
