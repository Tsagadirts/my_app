<template>
  <form @submit.prevent="submit()" id="form">
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button type="submit">Log in</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "tarek@gmail.com",
      password: ""
    };
  },

  methods: {
    submit() {
      this.$emit("submit", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<style>
#form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
 height: 100vh;
 display: grid;
    place-items: center;
}

</style>