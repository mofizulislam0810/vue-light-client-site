import Vue from "vue";
import HomePage from "./components/HomePage.vue";
import DetailsItem from "./components/DetailsItem.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/details/:id",
    component: DetailsItem,
  },
];

const router = new VueRouter({
  routes,
});
export default router;
