<template>
  <div>
    <App v-if="user" />
    <LoginForm v-else @submit="login" />
  </div>
</template>

<script>
import App from "./App";
import LoginForm from "./LoginForm";

export default {
  data() {
    return {
      user: null
    };
  },

  methods: {
    login({ email, password }) {
      this.user = { email, password };
    }
  },

  components: { App, LoginForm }
};
</script>