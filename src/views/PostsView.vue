<template>
  <div class="home" id="app">
    <h1>Articles</h1>
    <div class="title"></div>
    <router-link class="posts" v-for="post in posts" :key="post.id" :to="{name:'post', params:{id:post.id}, query:{posts:posts}}">
    <p>{{post.title}}</p>

    </router-link>
  </div>
</template>

<script>
export default{
  data(){
  return {
      posts :[
        { id: 1, title : "MongoDB", description : "blabla", text: "un texte plus long",img:"mdb.jpg" },
        { id: 2, title : "MySQL", description : "blabla", text: "un texte plus long",img:"mysql.jpg" },
        { id: 3,  title : "PHP", description : "blabla", text: "un texte plus long",img:"php.png" },
        { id: 4,title : "Pyhton", description : "blabla", text: "un texte plus long",img:"serp.png" },
        { id: 5,title : "Docker", description : "blabla", text: "un texte plus long",img:"docker.jpeg" },
    ] 
  }

}

}


     

</script>