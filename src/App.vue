<template>
  <div id="app">
    <div id="nav">
      <h1>Berita Terkini </h1>
      <div class="news">
        <list-berita v-for="(berita, index) in listBerita" :berita="berita" :key="index"></list-berita>
      </div>
    </div>
  </div>
</template>

<script>
import ListBerita from './components/ListBerita.vue';
export default {
  components: { ListBerita },
  name: "App",
  computed:{
    listBerita(){
      return this.$store.state.listBerita;
    }
  },
  mounted(){
    this.$store.dispatch("fetchBerita");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .news {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
  /* grid-column: 2fr; */
  grid-gap: 20px;
}
</style>
