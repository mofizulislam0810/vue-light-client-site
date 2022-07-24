<template>
    <v-form ref="form" v-model="valid" lazy-validation class="mx-8 my-8 px-8 py-8">
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" :counter="10" :rules="passwordRules" label="Password" required></v-text-field>
        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
            required></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="login(email, password)">
            Login
        </v-btn>
         <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="increment()">
            Store
        </v-btn> -->
    </v-form>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    data: () => ({
        valid: true,
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
        checkbox: false,
    }),
    methods: {
        login(email, password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((r) => {
                    // const destination = location.state?.from || "/";
                    // history.replace(destination);
                    console.log(r);
                })
                .catch((error) => {
                    console.log(error.message);
                })
                .finally(() => {

                });
        }

    },
     increment() {
    console.log(this.$store.state.count)
  }
}
</script>

<style>
</style>