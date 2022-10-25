import Main from "@/pages/Main/Main";
import VueRouter from "vue-router";
import Table from "@/pages/Table/Table";
import Google from "@/pages/Google/Google";
import Yandex from "@/pages/Yandex/Yandex";
import Vk from "@/pages/Vk/Vk";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/table",
    component: Table,
  },
  {
    path: "/google",
    component: Google,
  },
  {
    path: "/yandex",
    component: Yandex,
  },
  {
    path: "/vk",
    component: Vk,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/vue-test/",
  routes,
});

export default router;
