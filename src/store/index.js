import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        berita: [],
        kategori: [],
    },
    mutations: {
        setBerita(state, payload) {
            state.berita = payload
        }
    },
    actions: {
        getBerita({ commit }) {
            axios.get('/api/berita')
                .then(res => {
                    commit('setBerita', res.data)
                })
        }
    },
    getters: {
        getBerita(state) {
            return state.berita
        }
    }
})
