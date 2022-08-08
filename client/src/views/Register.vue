<script>
import { mapState, mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "RegisterForm",
  data() {
    return {};
  },
  computed: {
    ...mapState(useCustomerStore, ["registerForm"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["customerRegister"]),
    async registerHandler() {
      try {
        this.customerRegister();
        console.log("data masuk");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template>
  <div
    id="register-page"
    class="flex justify-center bg-gradient-to-r from-yellow-800 via-amber-500 to-brown-500"
  >
    <div class="flex py-8">
      <div
        class="max-w-lg w-96 bg-slate-600 opacity-90 md:from-yellow-400 rounded-2xl border border-gray-200 shadow-2xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <form class="space-y-6 py-10">
          <h5
            class="text-5xl text-center font-black text-gray-900 dark:text-white"
          >
            Register
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your email</label
            >
            <input
              v-model="registerForm.email"
              type="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="user@user.com"
              required=""
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your Username</label
            >
            <input
              v-model="registerForm.username"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="username"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your password</label
            >
            <input
              v-model="registerForm.password"
              type="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your Phone Number</label
            >
            <input
              v-model="registerForm.phoneNumber"
              type="number"
              placeholder="+62"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required=""
            />
          </div>
          <button
            @click.prevent="registerHandler"
            type="submit"
            class="w-full text-yellow-500 bg-slate-800 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
          <div
            class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
          >
            Already Have an Account? back to
            <router-link
              href="#"
              class="text-blue-700 hover:underline dark:text-blue-500"
              to="/login"
              >Login</router-link
            >
          </div>
          <div
            class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
          >
            <router-link
              href="#"
              class="text-blue-700 hover:underline dark:text-blue-500"
              to="/"
              >Home</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
