export const modalModule = {
  state: function () {
    return {
      isOpen: false,
      index: 0,
    };
  },
  mutations: {
    setIsOpen(state, payload) {
      state.isOpen = payload;
    },
    setIndex(state, payload) {
      state.index = payload;
    },
  },
};
