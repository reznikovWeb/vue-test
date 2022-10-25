export const modalModule = {
  state: function () {
    return {
      isOpen: false,
      index: 0,
    };
  },
  mutations: {
    setIsOpenTrue(state, payload) {
      state.isOpen = true;
      state.index = payload.index;
    },
    setIsOpenClose(state) {
      state.isOpen = false;
    },
  },
};
