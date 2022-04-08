<template>
  <div id="app">
  <h1>Bitcoin Price Index</h1>

  <section v-if="errored">
    <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
  </section>

  <section v-else>
    <div v-if="loading">Chargement...</div>
     <!-- afficher la description de la currency -->
    <div v-else v-for="currency in info" :key="currency.id" class="currency">
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>
    </div>

  </section>
</div>
</template>
<script>
//on import la vue et l'axios et le vue-axios
import Vue from 'vue';
import axios from 'axios';
import VueAxios from'vue-axios';
Vue.use(VueAxios,axios)
export default {
  //on recupére currency de la data info
// new Vue({
//   el: '#app',
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  //on recupére l'url de notre api soit avec la method get soit avec la methode fetch
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
        //donner  un id unique au composant 
        for(const key in this.info){
          this.info[key].id=Math.random()
        }
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
// })

  
}
</script>

<style>
.currency{
  font-size: 30px;
  font-family: 'Times New Roman', Times, serif;
}


</style>