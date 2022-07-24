import Vue from "vue";
import HomePage from "./components/HomePage.vue";
import DetailsItem from "./components/DetailsItem.vue";
import OrderItem from "./components/OrderItem.vue";
import VueRouter from "vue-router";
import OrderList from "./components/OrderList.vue";
import RegisterPage from "./components/RegisterPage.vue";
import LoginPage from "./components/LoginPage.vue";

Vue.use(VueRouter);
const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Details",
    path: "/details/:id",
    component: DetailsItem,
    meta: { auth: false },
  },
  {
    name: "Order",
    path: "/order/:id",
    component: OrderItem,
    meta: { auth: true },
  },
  {
    name: "OrderList",
    path: "/orderlist",
    component: OrderList,
    meta: { auth: true },
  },
  {
    name: "Register",
    path: "/register",
    component: RegisterPage,
    meta: { auth: false },
  },
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
    meta: { auth: false },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
