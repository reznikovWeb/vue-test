export const sidebarModule = {
  state: function () {
    return {
      isClosed: false,
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
  },
};
