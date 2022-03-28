import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listBerita: [],
    },
    mutations: {
        setListBerita(state, payload) {
            state.listBerita = payload;
        },
    },
    actions: {
        fetchBerita(store) {
            axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=cde232c8f71b47a1b7b281be2c0eefc2").then(response => {
                console.log(response.data.articles);
                store.commit("setListBerita", response.data.articles);
            });
        },
    },

    modules: {}
});