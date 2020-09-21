<template lang="html">
    <RadSideDrawer ref="drawer" drawerLocation="Left" gesturesEnabled="true" :drawerTransition="transition">
        <StackLayout ~drawerContent backgroundColor="white">
            <slot name="drawerContent"/>
        </StackLayout>
        <Frame ~mainContent ref="drawerMainContent">
            <slot name="mainContent"/>
        </Frame>
    </RadSideDrawer>
</template>

<script lang="ts">
import { SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  transition = new SlideInOnTopTransition();
}
</script>

<style scoped lang="scss">
// Start custom common variables
@import "~@nativescript/theme/scss/variables/blue";
// End custom common variables

// Custom styles
</style>
