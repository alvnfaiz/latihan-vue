/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import actions from './action'
import mutations from './mutation'
import getters from './getter'
import createPersistedState from "vuex-persistedstate"



Vue.use(Vuex);
const persistedstate = createPersistedState({
    key: "vuex",
    storage: window.sessionStorage
});

export default new Vuex.Store({
    plugins: persistedstate,
    state: {
        activeType: null,
        itemsPerPage: 20,
        items: {/* [id: number]: Item */},
        users: {/* [id: string]: User */},
        lists: {
            top: [/* number */],
            new: [],
            show: [],
            ask: [],
            job: []
        }
    },
    actions,
    mutations,
    getters,
});