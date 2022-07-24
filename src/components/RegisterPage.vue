<template>
    <v-form ref="form" v-model="valid" lazy-validation class="mx-8 my-8 px-8 py-8">
        <v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" :counter="10" :rules="passwordRules" label="Password" required></v-text-field>
        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
            required></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="register(email, password,name)">
            Registration
        </v-btn>
    </v-form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],

        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length <= 10) || 'Password must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
    }),

    methods: {
        register(email, password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password, name)
                .then(() => {
                    // const newUser = { email, displayName: name };
                    // setUser(newUser);
                    this.saveUser(email, name, "POST");
                    updateProfile(auth.currentUser, {
                        displayName: name,
                    })
                        .then(() => { })
                        .catch((error) => { console.log(error) });
                    // history.push("/");
                })
                .catch((error) => {
                    console.log(error.message);
                })
                .finally(() => {
                });
        },
        saveUser(email, displayName, method) {
            const user = { email, displayName };
            fetch("https://cryptic-stream-18194.herokuapp.com/users", {
                method: method,
                headers: {
                    "content-type": "application/json",
                },

                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }

    },
}
</script>

<style>
</style>