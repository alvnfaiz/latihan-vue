import axios from "axios";

const state = () => ({
    list_berita: [],

});

const mutations = {
    setBerita(state, payload) {
        state.list_berita = payload;
    },
};

const actions = {
    fetchBerita(store) {
        //fetch from news api
        axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=cde232c8f71b47a1b7b281be2c0eefc2").then(response => {
            store.commit("setBerita", response.data.articles);
        });
    },
};

export default {
    state,
    mutations,
    actions,
};