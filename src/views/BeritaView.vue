<template>
  <v-container class="my-10">
    <v-card v-for="berita in listNews" :key="berita.title" class="my-10">
      <v-img :src="berita.urlToImage" height="300" />
      <v-card-title
        ><h3>{{ berita.title }}</h3></v-card-title
      >
      <v-card-text>
        <p class="card-text text-muted">
          {{ berita.author === null ? "Author tidak ada" : berita.author }}
        </p>
      </v-card-text>
      <v-card-text>
        {{ berita.description }}
      </v-card-text>
      <v-container class="d-flex justify-space-between">
        <v-chip color="black" dark>{{ berita.source.name }}</v-chip>
        <v-item-group>
          <v-container>
            <v-row>
              <v-col v-for="iconShare in shareOpt" :key="iconShare.iconName">
                <v-item
                  ><v-icon :color="iconShare.color">{{
                    iconShare.iconName
                  }}</v-icon>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
        <v-btn color="primary" router :to="`${berita.title}`">Read More</v-btn>
      </v-container>
    </v-card>
    <v-btn class="d-block m-auto my-5" color="primary" @click="fetchNewsMore">
      More News
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      shareOpt: [
        {
          iconName: "mdi-reddit",
          color: "red",
        },
        {
          iconName: "mdi-twitter",
          color: "cyan",
        },
        {
          iconName: "mdi-facebook",
          color: "blue",
        },
        {
          iconName: "mdi-google-plus",
          color: "red",
        },
        {
          iconName: "mdi-linkedin",
          color: "blue",
        },
      ],
    };
  },
  computed: {
    listNews() {
      return this.$store.state.berita.berita;
    },
  },
  methods: {
    fetchNews() {
      this.$store.dispatch("berita/fetchNews");
    },
    fetchNewsMore() {
      this.$store.dispatch("berita/fetchNewsMore");
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.berita {
  transition: all 0.5s;
}
.berita:hover {
  /* position: relative;
  bottom: 7px; */
  transform: translateY(-10px);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
</style>