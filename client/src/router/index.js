import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from "../views/Login.vue";
import RegisterForm from "../views/Register.vue";
import HomePage from "../views/HomePage.vue";
import DetailPage from "../views/DetailPage.vue";
import FavoritePage from "../views/FavoritePage.vue"
import NotfoundPage from "../views/Notfound.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/register",
      name: "RegisterForm",
      component: RegisterForm,
    },
    {
      path: "/login",
      name: "LoginForm",
      component: LoginForm,
    },
    {
      path: "/detail/:id",
      name: "DetailPage",
      component: DetailPage,
    },
    {
      path: "/favorites",
      name: "FavoritePage",
      component: FavoritePage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotfoundPage
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (
    (to.name == "LoginForm" || to.name == "RegisterForm") &&
    localStorage.getItem("accessToken")
  )
    next({ name: "HomePage" });
  else if (to.name == "FavoritePage" && !localStorage.getItem("accessToken"))
    next({ name: "LoginForm" });
  else next();
});

export default router
