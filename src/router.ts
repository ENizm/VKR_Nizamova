import type {RouteRecordRaw, RouterScrollBehavior} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";

export const routingMap = {
    main: {
        component: () => import("./pages/main/main.vue"),
        name: "tages-landing-nizamova",
        get path() {
            return "/" + this.name
        }
    },
    form: {
        component: () => import("./pages/form/form.vue"),
        name: "tages-form-nizamova",
        get path() {
            return "/" + this.name
        }
    }
}

const routes: ReadonlyArray<RouteRecordRaw> = [
    {
        path: "/",
        redirect: routingMap.main.path,
    },
    {
        path: routingMap.main.path,
        name: routingMap.main.name,
        component: routingMap.main.component,
    },
    {
        path: routingMap.form.path,
        name: routingMap.form.name,
        component: routingMap.form.component,
    }
]

const scrollBehavior: RouterScrollBehavior = () => {
    return {
        top: 0,
    };
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior,
    routes,
});

export default router;
