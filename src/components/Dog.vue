<template>
    <v-card color="grey lighten-2">
        <v-img :src="dog.img" height="170px">
        </v-img>
        <v-card-title>
            <div>
                <h3>{{dog.name}}</h3>
                <p class="breed">{{dog.breed}} </p>
            </div>
        </v-card-title>
        <v-card-actions>
          <v-btn @click="addToFavorites(dog)">Add to Favorites</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    dog: Object,
  },
  methods: {
    ...mapActions(['addToFavorites']),
    // addToFavorites() {
    //   this.$store.commit('addFavorites', this.dog);
    // },
  },
};
</script>

<style>

</style>
