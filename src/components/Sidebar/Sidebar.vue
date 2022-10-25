<template>
  <ul class="sidebar">
    <SidebarItem v-for="menuItem in menu" :item="menuItem" :key="menuItem.id" />
  </ul>
</template>

<script>
import SidebarItem from "./SidebarItem/SidebarItem";
export default {
  components: {
    SidebarItem,
  },
  name: "Sidebar",
  data() {
    return {
      menu: [
        { id: 1, title: "Главная", icon: "home", to: "/" },
        { id: 2, title: "Таблица", icon: "table", to: "table" },
        { id: 3, title: "Google", icon: "google", to: "google" },
        { id: 4, title: "Yandex", icon: "yandex", to: "yandex" },
        { id: 5, title: "ВКонтакте", icon: "vk", to: "vk" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  grid-area: sidebar;
}
</style>
