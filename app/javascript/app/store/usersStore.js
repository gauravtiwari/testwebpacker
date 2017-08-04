import api from 'app/api'

const state = {
  currentUser: {
    displayname: null,
    id: null,
    signedIn: false
  }
}

const actions = {
  setCurrentUser: ({ commit }, user) => {
    commit('setCurrentUser', user)
  }
}

const mutations = {
  setCurrentUser (state, user) { state.currentUser = user }
}

const getters = {
  getIsUserSignedIn: state => state.currentUser.signedIn
}

export default {
  state,
  getters,
  actions,
  mutations
}
