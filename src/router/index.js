import Vue from "vue";
import VueRouter from "vue-router";
import Songs from "../views/Songs.vue";
import Albums from "../views/Albums.vue";
import Artists from "../views/Artists.vue";
import Shared from "../views/Shared.vue";

Vue.use(VueRouter);


const routes = [
 {
  path: "/",
  name: "Songs",
  component: Songs,
  meta: {
   title: 'Songs'
  }
 },
 {
  path: "/albums",
  name: "Albums",
  component: Albums,
  meta: {
   title: 'Albums'
  }
 },
 {
  path: "/artists",
  name: "Artists",
  component: Artists,
  meta: {
   title: 'Artists'
  }
 },
 {
  path: "/shared/:id",
  name: "Shared",
  component: Shared,
  meta: {
   title: 'Shared'
  }
 },

]

const router = new VueRouter({
 mode: "history",
 base: process.env.BASE_URL,
 routes,
});

router.beforeEach((to, from, next) => {
 document.title = `${to.meta.title} | iTubez`;
 next();
})

export default router;
