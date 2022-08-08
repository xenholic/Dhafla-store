<script>
import { useProductStore } from "../stores/product";
import { mapState, mapActions } from "pinia";
import Navbar from "../components/Navbar.vue";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "HomePage",
  components: {
    Navbar,
    ProductCard,
  },
  computed: {
    ...mapState(useProductStore, ["products", "categories"]),
  },
  methods: {
    ...mapActions(useProductStore, [
      "getProduct",
      "getCategory",
      "getFavorite",
      "previousPage",
      "nextPage",
    ]),
  },
  created() {
    this.getProduct();
    this.getCategory();
  },
};
</script>

<template>
  <div>
    <Navbar :listCategory="categories"></Navbar>
    <div>
      <div class="flex container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          ></ProductCard>
        </div>
      </div>

      <div class="flex justify-center items-center p-5 ml-5">
        <a
          @click="previousPage"
          class="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-yellow-500 bg-white rounded-lg border border-gray-300 hover:bg-red-500 hover:text-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white italic font-serif"
        >
          Previous
        </a>
        <a
          @click="nextPage"
          class="inline-flex items-center py-2 px-4 text-sm font-medium text-yellow-500 bg-white rounded-lg border border-gray-300 hover:bg-red-500 hover:text-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white italic font-serif"
        >
          Next
        </a>
      </div>
    </div>
  </div>
</template>
