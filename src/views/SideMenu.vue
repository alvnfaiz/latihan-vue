<template>
  <div>
    <v-app-bar color="primary" app dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>News App</v-toolbar-title>
      <v-spacer></v-spacer>
      <search-view />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="smuaCat in listCat" :key="smuaCat.name">
            <v-list-item-icon>
              <v-icon>{{ smuaCat.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ smuaCat.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SearchView from "./SearchView.vue";
export default {
  components: { SearchView },
  data() {
    return {
      drawer: false,
      group: null,
      listCat: [
        { name: "Business", icon: "" },
        { name: "Entertainment", icon: "" },
        { name: "General", icon: "" },
        { name: "Health", icon: "" },
        { name: "Science", icon: "" },
        { name: "Sports", icon: "" },
        { name: "Technology", icon: "" },
      ],
    };
  },
  computed: {
    listBerita() {
      console.log(this.$store.state.news.news);
      return this.$store.state.news.news;
    },
  },
  methods: {
    showSearch() {},
  },
};
</script>

<style>
</style>