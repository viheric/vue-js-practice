import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventLayout from "../views/event/Layout.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import About from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
      },
    ]
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => ({ path: '/events/' + to.params.afterEvent })
  },

  /*
  {
    path: '/event/:id',
    redirect: { name: 'EventDetails' },
    children: [
      { path: 'register', redirect: { name: 'EventRegister' } },
      { path: 'edit', redirect: { name: 'EventEdit' } }
    ]
  },
  */
  {
    path: "/about",
    name: "about",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    // import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),

    //alias:'/about-us'
  },
  {
    path: "/about-us",
    name: "about-us",
    redirect: { name: "about" }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
