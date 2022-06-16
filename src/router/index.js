import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue";
import EventRegister from "../views/EventRegister.vue";
import EventEdit from "../views/EventEdit.vue";
import About from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    /*props: (route) => ({
      e: route.query.e || '',
      b: route.query.b || null,
      big_salary: route.query.big_salary || null,
    })*/
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: (route) => ({ id:route.params.id, ind : route.params.id}),
    component: EventDetails,
  },
  {
    path: "/event/:id/register",
    name: "EventRegister",
    props: true,
    component: EventRegister,
  },
  {
    path: "/event/:id/edit",
    name: "EventEdit",
    props: true,
    component: EventEdit,
  },
  {
    path: "/about",
    name: "about",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    // import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
