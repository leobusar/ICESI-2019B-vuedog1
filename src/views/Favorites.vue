<template>
  <div>
      <v-subheader v-if="!favorites.length"> Your list favorites is empty </v-subheader>
      <v-list v-else >
          <v-subheader> My Favorites </v-subheader>
          <v-list-tile avatar v-for="(dog, index) in favorites" :key="index" >
              <v-list-tile-avatar >
                  <img :src="dog.img">
              </v-list-tile-avatar>
              <v-list-tile-content>{{dog.name}}</v-list-tile-content>
              <v-list-tile-action>
                <v-icon @click="removeFromFavorites(dog)">delete</v-icon>
              </v-list-tile-action>
          </v-list-tile>
      </v-list>
  </div>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
  },
  methods: {
    removeFromFavorites(dog) {
      this.$store.commit('removeFavorites', dog);
    },
  },
};
</script>

<style>

</style>
