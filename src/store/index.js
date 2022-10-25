import Vue from "vue";
import Vuex from "vuex";
import { tableModule } from "@/store/tableModule";
import { modalModule } from "@/store/modalModule";
import { sidebarModule } from "@/store/sidebarModule";
import { pagesModule } from "@/store/pagesModule";
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    table: tableModule,
    modal: modalModule,
    sidebar: sidebarModule,
    pages: pagesModule,
  },
});
