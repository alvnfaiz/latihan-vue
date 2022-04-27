import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import berita from '@/store/berita'


Vue.use(Vuex)

const persistedstate = createPersistedState({
  paths:['berita']
})
export default new Vuex.Store({
  plugins:[persistedstate],
  modules: {
    berita:{
      namespaced:true,
      ...berita
    }
  }
})
