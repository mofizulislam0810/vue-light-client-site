<template>
  <v-app>
    <NavBar />

    <v-content>
      <router-view></router-view>
    </v-content>

    <FooTer />
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooTer from './components/FooTer.vue';

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { NavBar, FooTer }
};
</script>
