<template>
  <v-card class="mx-auto" max-width="344" height="330px">
    <v-img :src="item.image" height="200px"></v-img>
    <div class="px-5">
      <p class="font-weight-black text-left my-2">
        {{ item.name.slice(0, 30) }}...
      </p>

      <p class="font-weight-black text-left mb-0">
        price {{ item.price }}Tk
      </p>
      <v-btn class="p-0 ps-0" color="orange lighten-2" text :to="'/details/' + item._id">
        Details
      </v-btn>
    </div>
  </v-card>
</template>

<script>

export default {
  name: "CardItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      show: false,
    };
  }
}
</script>

<style>
</style>