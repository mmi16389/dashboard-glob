import Vue from "nativescript-vue";
import App from "./components/App.vue";
import Home from "./components/Home.vue";
import DrawerContent from "./components/DrawerContent.vue"; 

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

Vue.config.silent = (TNS_ENV === 'production');

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(Home, { slot: 'mainContent' })
          ]
        )
      }
  }).$start();
