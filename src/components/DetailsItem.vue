<template>
    <div>
        <v-card class="d-flex align-content-center justify-space-around flex-wrap mb-6 mt-8" flat tile>

            <div class="mx-auto mb-5" max-width="400">
                <v-img :src="lightDetails.image"></v-img>
            </div>
            <v-card class="mx-auto mb-5" max-width="1000">
                <v-card-text>
                    <div>Price {{lightDetails.price}}TK</div>
                    <p class="text-h4 text--primary">
                        {{lightDetails.name}}
                    </p>
                    <div class="text--primary">
                       {{lightDetails.description}}
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn text color="teal accent-4" :to="'/order/' + lightDetails._id">
                        Order Now
                    </v-btn>
                </v-card-actions>
            </v-card>

        </v-card>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "DetailsItem",
    data() {
        return {
            lightDetails: [],
            alignments: [
                "center",
            ],

        };
    },
    methods: {
        async loader() {
            const result = await axios.get("https://cryptic-stream-18194.herokuapp.com/products/" + this.$route.params.id);
            console.log(result);
            this.lightDetails = result.data;
        }
    },
    async mounted() {
        this.loader();
    },
}
</script>

<style>
</style>