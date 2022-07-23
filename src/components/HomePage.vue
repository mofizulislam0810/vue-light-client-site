<template>
    <v-card>
        <CarouselItem />
        <GridCol />
    </v-card>
</template>

<script>
import CarouselItem from './CarouselItem.vue';

import GridCol from './GridCol.vue';
export default {
    name: "HomePage",
    components: { CarouselItem, GridCol },
}
</script>

<style>
</style>