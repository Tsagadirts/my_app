<template>
  <div class="post">
    <!-- on recupére les params de la query afin de pouvoir afficher les element de notre data -->
    <div v-for="post in $route.query.posts" :key="post.id">
      
      <ul  v-if="post.id === $route.params.id" id="post">
        <li class="titre">{{post.title}}</li>
        <!-- recupéré l'image a partir de la source pusblic/assets(on a déplacer le dossier assets dans public) -->
        <li><img :src="'/assets/' + post.img"/></li>
        <!-- afficher la description et le text -->
        <li>Description: {{post.description}}</li>
        <br>
        <br>
        <li>Definition: {{post.text}}</li>
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

li{
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
}

li.titre{
  font-size: 30px;
  font-weight: 300;
  color:rgb(49, 56, 37);
}
</style>

