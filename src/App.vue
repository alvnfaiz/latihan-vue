<template>
  <v-app>
    <side-menu />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideMenu from "./views/SideMenu.vue";
export default {
  name: "App",
  components: {
    SideMenu,
  },
  data: () => ({
    //
  }),
};
</script>
