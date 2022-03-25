import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import './index.css'

Vue.config.productionTip = false
const persistedState = createPersistedState({
  paths:['store']
});

const state = {
  tasks : [],
  deskripsi : [],
}

const mutations = {
    // addTask(state, task) {
    //   state.tasks.push(task);
    // },
  changeTask(state, params) {
    state.tasks = params;
  },
  changeDeskripsi(state, index, params){
    state.deskripsi[index] = params;
  }
}



Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [persistedState],
  state,
  mutations,
})