<template>
  <div>
    <ul class="sidebar">
      <SidebarItem v-for="menuItem in menu" :item="menuItem" />
    </ul>
  </div>
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
        { id: 1, title: "Главная", icon: "home" },
        { id: 2, title: "Таблица", icon: "table" },
        { id: 3, title: "Google", icon: "google" },
        { id: 4, title: "Yandex", icon: "yandex" },
        { id: 5, title: "ВКонтакте", icon: "vk" },
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
