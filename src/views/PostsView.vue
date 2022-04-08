<template>
  <div class="home" id="app">
    <h1>Articles</h1>
    <div class="title"></div>
    <!-- faire la redirection a la page poste on passent les params a travers la query -->
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
        { id: 1, title : "MongoDB", description : "MongoDB est un système de gestion de base de données orienté documents, répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant pas de schéma prédéfini des données. Il est écrit en C++", text: "MongoDB est publié sous la Server Side Public License (SSPL), une licence développée par le projet. Elle remplace la GNU Affero General Public License, et est presque identique à la GNU General Public License version 3, mais exige que ceux qui rendent le logiciel disponible au public dans le cadre ",img:"mdb.jpg" },
        { id: 2, title : "MySQL", description : "Database Service est un service de base de données entièrement géré pour déployer des applications natives du cloud en utilisant la base de données ", text: "MySQL est un serveur de bases de données relationnelles SQL développé dans un souci de performances élevées en lecture, ce qui signifie qu'il est davantage orienté vers le service de données déjà en place que vers celui de mises à jour fréquentes et fortement sécurisées",img:"mysql.jpg" },
        { id: 3,  title : "PHP", description : "un langage de programmation libre, principalement utilisé pour produire des pages Web dynamiques via un serveur HTTP", text: "C'est un langage peu typé et souple et donc facile à apprendre par un débutant mais, de ce fait, des failles de sécurité peuvent rapidement apparaître dans les applications. Pragmatique, PHP ne s'encombre pas de théorie et a tendance à choisir le chemin le plus direct. Néanmoins, le nom des fonctions (ainsi que le passage des arguments) ne respecte pas toujours une logique uniforme",img:"php.png" },
        { id: 4,title : "Pyhton", description : "un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée", text: "On l'utilise également comme langage de développement de prototype lorsqu'on a besoin d'une application fonctionnelle avant de l'optimiser avec un langage de plus bas niveau. Il est particulièrement répandu dans le monde scientifique, et possède de nombreuses bibliothèques optimisées destinées au calcul numérique.",img:"pthn.jpg" },
        { id: 5,title : "Docker", description : "Docker est un outil qui peut empaqueter une application et ses dépendances dans un conteneur isolé", text: "Techniquement, Docker étend le format de conteneur Linux standard, LXC, avec une API de haut niveau fournissant une solution pratique de virtualisation qui exécute les processus de façon isolée2. Pour ce faire, Docker utilise entre autres LXC, cgroups et le noyau Linux lui-même1. Contrairement aux machines virtuelles traditionnelles, un conteneur Docker n'inclut pas de système d'exploitation",img:"docker.jpeg" },
    ] 
  }

}

}


     

</script>