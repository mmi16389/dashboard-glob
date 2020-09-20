<template>
  <div class="login" style="border:1px solid rgba(0,0,0,.1);width:25%;margin:auto;background:white">
    <div style="margin-top:40px;"></div>
    <img src="./../assets/xdevopps.png" />
    <div style="margin-top:25px;"></div>
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
   position: absolute;
   top: 10%;
   left:36.33%
}
input {
  margin: 10px 0;
  width: 80%;
  padding: 15px;
  border:1px solid rgba(0,0,0,.1);
}
button {
  margin-top: 40px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
