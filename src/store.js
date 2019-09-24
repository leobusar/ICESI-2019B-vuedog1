import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [
      {
        name: 'Max',
        breed: 'husky',
        img: 'https://images.dog.ceo/breeds/husky/n02110185_1469.jpg',
      },
      {
        name: 'Rusty',
        breed: 'shiba',
        img: 'https://images.dog.ceo/breeds/shiba/shiba-13.jpg',
      },
      {
        name: 'Rocco',
        breed: 'boxer',
        img: 'https://images.dog.ceo/breeds/boxer/n02108089_14112.jpg',
      },
    ],
  },
});
