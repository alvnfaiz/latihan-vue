<template>
  <div>
    <v-app-bar color="primary" app dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>News App</v-toolbar-title>
      <v-spacer></v-spacer>
      <search-view />
    </v-app-bar>
    <v-navigation-drawer color="primary white--text" v-model="drawer" app clipped>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4"
        >
          <v-list-item v-for="category in categories" :key="category.name">
            <v-list-item-icon>
              <v-icon>{{ category.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ category.name }}</v-list-item-title>
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
      drawer: true,
      group: null,
      categories: [
        { name: "Business", icon: "mdi-chart-line" },
        { name: "Entertainment", icon: "mdi-movie-open" },
        { name: "General", icon: "mdi-newspaper-variant-outline" },
        { name: "Health", icon: "mdi-hospital" },
        { name: "Science", icon: "mdi-beaker" },
        { name: "Sports", icon: "mdi-football" },
        { name: "Technology", icon: "mdi-server" },
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