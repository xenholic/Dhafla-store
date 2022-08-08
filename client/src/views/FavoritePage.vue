<script>
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../stores/product";
import FavoriteCard from "../components/FavoriteCard.vue";
export default {
  name: "FavoritePage",
  components: {
    FavoriteCard,
  },
  computed: {
    ...mapState(useProductStore, ["favorites"]),
  },
  methods: {
    ...mapActions(useProductStore, ["getFavorite"]),
  },
  created() {
    this.getFavorite();
  },
};
</script>

<template>
  <div>
    <div class="p-5 text-center">
      <router-link
        class="text-sm title-font text-center text-yellow-500 font-serif italic"
        to="/"
      >
        Back Home
      </router-link>
      <h1 class="text-5xl font-black text-yellow-500 font-serif italic">
        Favorites
      </h1>
    </div>
    <div class="flex container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
        <FavoriteCard
          v-for="favorite in favorites"
          :key="favorite.id"
          :product="favorite"
        ></FavoriteCard>
        <!-- END Column -->
      </div>
    </div>
  </div>
</template>
