<template>
    <div class="my-8 px-8 mx-8">
        <v-text-field label="Light Id" v-model="lightDetails._id" readonly></v-text-field>
        <v-text-field label="Light Name" v-model="lightDetails.name" readonly></v-text-field>
        <v-text-field label="Light Price" v-model="lightDetails.price" readonly></v-text-field>
        <v-text-field label="Light Description" v-model="lightDetails.description" readonly></v-text-field>
        <v-text-field label="Customer Name" v-model="name" readonly></v-text-field>
        <v-text-field label="Customer Email" v-model="email" readonly></v-text-field>
        <v-text-field label="Order Status" v-model="status" readonly></v-text-field>
        <v-text-field label="Phone Number" v-model="phone" readonly></v-text-field>
        <v-btn block @click="order()">
            Order Now
        </v-btn>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "OrderItem",
    data: () => ({
        name: "Roton Islam",
        email: "asd@gmail.com",
        status: "pandding",
        phone: "01625874512",
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
        lightDetails: {
            _id: "",
            name: "",
            price: "",
        },
    }),
    methods: {
        async order() {
            const result = await axios.post("https://cryptic-stream-18194.herokuapp.com/orders", {
                name: this.name,
                email: this.email,
                productName: this.lightDetails.name,
                price: this.lightDetails.price,
                status: this.status,
                description: this.lightDetails.description,
                image: this.lightDetails.image,
                phone: this.phone,
            })
            if (result.status === 200) {
                if (result.data.insertedId) {
                    alert("Successfully Order!");
                }
            }
            console.warn(result)
        },
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