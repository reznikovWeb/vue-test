export const pagesModule = {
  state: function () {
    return {
      menuItemClick: -1,
    };
  },
  mutations: {
    increaseMenuItemClick(state) {
      state.menuItemClick++;
    },
  },
};
