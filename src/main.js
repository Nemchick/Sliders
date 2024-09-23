import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import SliderFull from "@/components/SliderFull.vue";
import SloderReviews from "@/components/SloderReviews.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "SliderFull",
      path: "/",
      component: SliderFull,
    },
    {
      name: "SloderReviews",
      path: "/reviews",
      component: SloderReviews,
    },
  ],
});
const app = createApp(App);
createApp(App);
app.use(router);
app.mount("#app");
