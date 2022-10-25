export const sidebarModule = {
  state: function () {
    return {
      isClosed: false,
      menu: [
        { id: 1, title: "Главная", icon: "home", to: "/" },
        { id: 2, title: "Таблица", icon: "table", to: "table" },
        { id: 3, title: "Google", icon: "google", to: "google" },
        { id: 4, title: "Yandex", icon: "yandex", to: "yandex" },
        { id: 5, title: "ВКонтакте", icon: "vk", to: "vk" },
      ],
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
