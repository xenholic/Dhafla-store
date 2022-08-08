<script>
import { mapActions, mapState } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "Login",
  computed: {
    ...mapState(useCustomerStore, ["LoginForm"]),
  },
  methods: {
    ...mapActions(useCustomerStore, [
      "customerLogin",
      "handleCreadentialRespons",
    ]),
    async loginHandler() {
      try {
        this.customerLogin();
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    const cb = this.handleCreadentialRespons;
    google.accounts.id.initialize({
      client_id:
        "317944751357-oek19ae5l2ih4i1b9mujgrqtm1muqkjm.apps.googleusercontent.com",
      callback: cb,
    });
    google.accounts.id.renderButton(
      document.getElementById("DivGoogle"),
      { theme: "outline", size: "large" } // customization attributes
    );
  },
};
</script>
<template>
  <div
    id="login-page"
    class="flex justify-center bg-gradient-to-r from-yellow-800 via-amber-500 to-brown-500"
  >
    <div class="flex py-24">
      <div
        class="max-w-lg w-96 bg-slate-600 opacity-90 md:from-yellow-400 rounded-2xl border border-gray-200 shadow-2xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <form class="space-y-6 py-10">
          <h5
            class="text-5xl text-center font-black text-gray-900 dark:text-white"
          >
            Login
          </h5>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="user@user.com"
              v-model="LoginForm.email"
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Your password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              v-model="LoginForm.password"
            />
          </div>
          <button
            @click.prevent="loginHandler"
            type="submit"
            class="w-full text-yellow-600 bg-slate-800 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-900 dark:focus:ring-blue-800"
          >
            Login
          </button>

          <div
            class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
          >
            Doesn't Have an Account? back to
            <div class="text-blue-700 hover:underline dark:text-blue-500">
              <router-link
                href="#"
                class="text-blue-700 hover:underline dark:text-blue-500"
                to="/register"
                >Register</router-link
              >
            </div>
          </div>
          <div
            class="text-sm text-center font-medium text-gray-500 dark:text-gray-300"
          >
            or Back
            <div class="text-blue-700 hover:underline dark:text-blue-500">
              <router-link
                href="#"
                class="text-blue-700 hover:underline dark:text-blue-500"
                to="/"
                >Home</router-link
              >
            </div>
          </div>
        </form>
        <button
          class="w-full text-white bg-blue-600 hover:bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          data-client_id="YOUR_GOOGLE_CLIENT_ID"
          data-login_uri="https://your.domain/your_login_endpoint"
          data-auto_prompt="false"
          id="DivGoogle"
        >
          Login with Google
        </button>
      </div>
    </div>
  </div>
</template>
