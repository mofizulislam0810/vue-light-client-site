import Vue from "vue";
import HomePage from "./components/HomePage.vue";
import DetailsItem from "./components/DetailsItem.vue";
import OrderItem from "./components/OrderItem.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    name:"Home",
    path: "/",
    component: HomePage,
  },
  {
    name:"Details",
    path: "/details/:id",
    component: DetailsItem,
  },
  {
    name:"Order",
    path: "/order/:id",
    component: OrderItem,
  },
];

const router = new VueRouter({
  routes,
});
export default router;
