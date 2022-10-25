<template>
  <li>
    <router-link class="link" :to="item.to">
      <Icon :name="item.icon" class="img" />
      <span>{{ item.title }}</span>
    </router-link>
  </li>
</template>

<script>
import Icon from "@/components/Icon/Icon";
export default {
  components: {
    Icon,
  },
  name: "SidebarItem",
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  color: var(--color-primary);
  border: none;
  width: 100%;
  text-align: left;
  font-size: var(--fz-m);
  padding: 10px 10px;
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: rgba(#ffffff, 0.2);
  }
}

.img {
  width: 25px;
  height: 25px;
  object-fit: cover;
  margin-right: 15px;
  fill: white;
}

.router-link-exact-active {
  background-color: rgba(#ffffff, 0.2);
}
</style>
