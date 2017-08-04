import Vue from 'vue'
import Vuex from 'vuex'
import usersStore from './usersStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    usersStore,
  }
})
