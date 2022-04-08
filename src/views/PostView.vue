<template>
  <div class="post">
    <!-- on recupére les params de la query afin de pouvoir afficher les element de notre data -->
    <div v-for="post in $route.query.posts" :key="post.id">
      
      <ul  v-if="post.id === $route.params.id" id="post">
        <li>{{post.title}}</li>
        <!-- recupéré l'image a partir de la source pusblic/assets(on a déplacer le dossier assets dans public) -->
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

