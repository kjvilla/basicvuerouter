import {createRouter, createWebHistory} from "vue-router";
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import FAQS from "./pages/faqs.vue";
import Contact from "./pages/contact.vue";
import NotFound from "./pages/404.vue";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/faqs",
        name: "FAQS",
        component: FAQS,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({history: createWebHistory(), routes,
});

export default router;