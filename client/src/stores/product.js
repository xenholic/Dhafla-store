import { defineStore } from "pinia"
import axios from "axios"

export const useProductStore = defineStore("Product", {
  state() {
    return {
      baseUrl: "http://localhost:3000",
      products: [],
      productById: [],
      page: 1,
      favorites: [],
      categories: [],
      findName: "",
      findCategory: "",
      totalPage: "",
      QRcode: ""
    }
  },
  actions: {
    nextPage() {
      if (this.page !== this.totalPage) {
        this.page++
        this.getProduct()
      }
    },
    previousPage() {
      if (this.page !== 1) {
        this.page--
        this.getProduct()
      }
    },
    filterName(data) {
      this.findName = data
      this.getProduct()
    },

    async getProduct() {
      try {
        let response = await axios.get(`${this.baseUrl}/customers/products?page=${this.page}&findCategory=${this.findCategory}&search=${this.findName}`)
        this.totalPage = response.data.data.totalPage
        this.products = response.data.data.getAllProduct.rows
        router.push({
          name: "HomePage",
          query: {
            page: this.page,
            findCategory: this.findCategory,
            search: this.findName
          }
        })
      } catch (err) {
        console.log(err, "ini error");
      }
    },

    async getProductById(id) {
      try {
        let response = await axios.get(`${this.baseUrl}/customers/products/${id}`)

        this.productById = response.data.data
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `Error`,
          text: `Data Error`
        });
      }
    },

    async getCategory() {
      try {
        let response = await axios.get(`${this.baseUrl}/categories`)
        this.categories = response.data.data

      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `Error`,
          text: `Data Error`
        });
      }
    },



    async getFavorite() {
      try {
        let response = await axios.get(`${this.baseUrl}/customers/favorites`, {
          headers: {
            access_token: localStorage.getItem("accessToken")
          }
        })
        this.favorites = response.data.data
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `Error`,
          text: `Data Error`
        });
      }
    },
    async addFavorite(id) {
      try {
        await axios.post(`${this.baseUrl}/customers/favorites/${id}`,
          {

            ProductId: id,
          },
          {
            headers: {
              access_token: localStorage.getItem("accessToken")

            },
          })
        Swal.fire({
          icon: "success",
          title: `Success`,
          text: `Add to Favorite Success`
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: `Error`,
          text: `Login First`
        });
      }
    },

    async deleteFavorite(favoritesId) {
      try {
        const response = await axios.delete(`${this.baseUrl}/customers/favorites/${favoritesId}`, {
          headers: {
            access_token: localStorage.getItem("accessToken")
          }
        })
        console.log(response);
        this.getFavorite()
      } catch (err) {
        console.log(err);
      }
    },
  }
})
