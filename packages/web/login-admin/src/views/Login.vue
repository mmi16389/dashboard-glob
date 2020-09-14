<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />
    <button @click="login">Connection</button>
    <p>
      You don't have an account ? You can
      <router-link to="/sign-up">create one</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { VForm } from '../types'
import Vue from 'vue'
import { Component, Ref } from 'vue-property-decorator'
import firebase from 'firebase'

@Component
export default class Login extends Vue {
  @Ref('form') readonly form!: VForm;

  valid = true;

  email = '';

  password = '';

  login () {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(
        () => {
          this.$router.replace('home')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
  }
}
</script>
<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
