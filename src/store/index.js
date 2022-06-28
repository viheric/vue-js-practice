import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Eric AKAKPO',
    events : []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {},
  modules: {}
})