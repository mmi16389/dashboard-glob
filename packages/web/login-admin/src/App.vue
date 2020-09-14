<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
         <h2>Test Cypress</h2>
      </div>
    </v-app-bar>

    <v-main>
      <transition name="fade" mode="out-in">
        <!-- Load the component defined in the router for the current route -->
        <RouterView />
      </transition>
    </v-main>
  </v-app>
</template>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
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
  .social-button {
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    outline: 0;
    border: 0;
  }
  .social-button:active {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  }
  .social-button img {
    width: 100%;
  }
  </style>
