import Vue from "nativescript-vue";
import App from "./components/App.vue";
import Home from "./components/Home.vue";
import DrawerContent from "./components/DrawerContent.vue"; 
import RadSideDrawer from "nativescript-ui-sidedrawer/vue"

Vue.use(RadSideDrawer);

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
