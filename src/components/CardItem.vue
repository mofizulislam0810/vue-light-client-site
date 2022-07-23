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
      <v-btn class="p-0 ps-0" color="orange lighten-2" text>
        Details
      </v-btn>
    </div>


    <v-card-actions>
      <!-- <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn> -->
    </v-card-actions>

    <!-- <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </div>
    </v-expand-transition> -->
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

  data: () => ({
    show: false,
  }),
}
</script>

<style>
</style>