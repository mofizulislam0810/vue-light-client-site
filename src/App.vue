<template>
  <v-app>
    <NavBar />
    <HomePage />
    <FooTer />

  </v-app>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import NavBar from "./components/NavBar.vue";
import FooTer from "./components/FooTer.vue";
export default {
  name: 'App',

  components: {
    HomePage,
    NavBar,
    FooTer
  },

  data: () => ({
    //
  }),
};
</script>
