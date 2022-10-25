<template>
  <ul
    :class="{ sidebar: true, sidebarIsClosed: $store.state.sidebar.isClosed }"
  >
    <SidebarItem
      v-for="menuItem in $store.state.sidebar.menu"
      :item="menuItem"
      :key="menuItem.id"
    />
  </ul>
</template>

<script>
import SidebarItem from "./SidebarItem/SidebarItem";
export default {
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
