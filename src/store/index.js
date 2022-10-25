import Vue from "vue";
import Vuex from "vuex";
import { tableModule } from "@/store/tableModule";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: function () {
    return {
      isClosed: false,
      menuItemClick: -1,
    };
  },
  mutations: {
    toggleIsClosed(state) {
      localStorage.setItem("isClosed", `${!state.isClosed}`);
      state.isClosed = !state.isClosed;
    },
    setIsClosed(state, payload) {
      state.isClosed = payload.isClosed;
    },
    increaseMenuItemClick(state) {
      state.menuItemClick++;
    },
  },
  modules: {
    table: tableModule,
  },
});
