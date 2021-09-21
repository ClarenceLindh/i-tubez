import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Artist from "../views/Artist.vue";

Vue.use(VueRouter);


const routes = [
 {
  path: "/",
  name: "Home",
  component: Home,
  meta: {
   title: 'Home'
  }
 },
 {
  path: "/about",
  name: "About",
  component: About,
  meta: {
   title: 'About'
  }
 },
 {
  path: "/artist/:id",
  name: "Artist",
  component: Artist,
  meta: {
   title: 'Artist'
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
