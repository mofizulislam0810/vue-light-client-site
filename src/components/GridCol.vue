<template>
  <div class="">
    <v-card class="d-flex align-content-center justify-space-around flex-wrap py-6 px-6" color="grey lighten-2" flat
      tile min-height="200">
      <v-card class="ma-2" v-for="item in lightList" :key="item._id">
        <CardItem :item="item"></CardItem>
      </v-card>
    </v-card>

  </div>
</template>

<script>
import axios from 'axios'
import CardItem from './CardItem.vue';
export default {
  name: "GridCol",
  data() {
    return {
      name: "",
      lightList: [],
      alignments: [
        "center",
      ],

    };
  },
  methods: {
    async loader() {
      const result = await axios.get("https://cryptic-stream-18194.herokuapp.com/products");
      console.log(result);
      this.lightList = result.data;
    }
  },
  async mounted() {
    this.loader();
  },
  components: { CardItem }
}
</script>

<style>
</style>