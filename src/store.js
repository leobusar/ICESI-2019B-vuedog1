import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
  },
  mutations: {
    addFavorites(state, dog) {
      if (state.favorites.indexOf(dog) <= -1) {
        state.favorites.push(dog);
      }
    },
    removeFavorites(state, dog) {
      state.favorites.splice(state.favorites.indexOf(dog), 1);
    },
  },
  actions: {
    addToFavorites({ commit }, dog) {
      commit('addFavorites', dog);
    },
  },
});
