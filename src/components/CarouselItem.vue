<template>

  <v-card>
    <v-carousel :show-arrows="true">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
        transition="fade-transition"></v-carousel-item>
    </v-carousel>
  </v-card>



</template>

<script>
export default {
  name: "CarouselItem",
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>

<style>
</style>