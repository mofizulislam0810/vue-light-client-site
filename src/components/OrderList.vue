<template>
    <v-simple-table fixed-header height="300px" class="mx-8 my-8">
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">
                        Id
                    </th>
                    <th class="text-left">
                        Light Name
                    </th>
                    <th class="text-left">
                        Price
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item._id }}</td>
                    <td>{{ item.productName }}</td>
                    <td>{{ item.price }}</td>
                    <td>{{ item.status }}</td>
                    <td @click="deleteOrder(item._id)">
                        <v-btn>Delete</v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import axios from 'axios'
export default {
    name: 'OrderList',
    data: () => ({
        desserts: []
    }),
    methods: {
        async loader() {
            const result = await axios.get(`https://cryptic-stream-18194.herokuapp.com/orders?email=asd@gmail.com`);
            console.log(result);
            this.desserts = result.data;
        },
        async deleteOrder(id) {
            const proceed = window.confirm("Are you sure, you want to delete?");
            if (proceed) {
                const result = await axios.delete("https://cryptic-stream-18194.herokuapp.com/orders/" + id);
                console.log(result);
                if (result.status === 200) {
                    this.loader();
                }
            }
        },
    },
    async mounted() {
        this.loader();
    },
}
</script>

<style>
</style>