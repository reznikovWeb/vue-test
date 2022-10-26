<template>
  <ul
    :class="{ sidebar: true, sidebarIsClosed: $store.state.sidebar.isClosed }"
  >
    <SidebarItem
      v-for="menuItem in menu"
      :title="menuItem.title"
      :to="menuItem.to"
      :icon="menuItem.icon"
      :key="menuItem.id"
    >
    </SidebarItem>
  </ul>
</template>

<script>
import SidebarItem from "./SidebarItem";
import IconHome from "@/components/Icons/IconHome";
import IconTable from "@/components/Icons/IconTable";
import IconGoogle from "@/components/Icons/IconGoogle";
import IconYandex from "@/components/Icons/IconYandex";
import IconVk from "@/components/Icons/IconVk";
export default {
  data() {
    return {
      menu: [
        { id: 1, title: "Главная", icon: IconHome, to: "/" },
        { id: 2, title: "Таблица", icon: IconTable, to: "table" },
        { id: 3, title: "Google", icon: IconGoogle, to: "google" },
        { id: 4, title: "Yandex", icon: IconYandex, to: "yandex" },
        { id: 5, title: "ВКонтакте", icon: IconVk, to: "vk" },
      ],
    };
  },
  components: {
    SidebarItem,
  },
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  grid-area: sidebar;
  width: var(--sidebar-width);
  transition: width 0.2s;

  @media (max-width: 500px) {
    width: var(--sidebar-width-collapsed);
  }
}

.sidebar.sidebarIsClosed {
  width: var(--sidebar-width-collapsed);
}
</style>
