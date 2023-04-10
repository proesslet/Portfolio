import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProjectsPage from "../pages/ProjectsPage.vue";

const history = createWebHistory();
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
  {
    path: "/projects",
    component: ProjectsPage,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;
