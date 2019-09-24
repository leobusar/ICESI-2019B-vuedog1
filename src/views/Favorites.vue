<template>
  <div>
      <v-list>
          <v-subheader> My Favorites </v-subheader>
          <v-list-tile avatar v-for="(dog, index) in favorites" :key="index" >
              <v-list-tile-avatar >
                  <img :src="dog.img">
              </v-list-tile-avatar>
              <v-list-content>{{dog.name}}</v-list-content>
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

};
</script>

<style>

</style>
