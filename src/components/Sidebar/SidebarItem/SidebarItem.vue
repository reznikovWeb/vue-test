<template>
  <li>
    <router-link
      :class="{ link: true, isClosed: $store.state.isClosed }"
      :to="item.to"
    >
      <Icon :name="item.icon" class="link__img" />
      <span class="link__title">{{ item.title }}</span>
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
  padding: 10px 15px;
  transition: background-color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: rgba(#ffffff, 0.2);
  }

  &__title {
    margin-left: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__img {
    width: 25px;
    height: 25px;
    object-fit: cover;
    fill: white;
    flex-shrink: 0;
  }
}

.link.isClosed {
  .title {
    display: none;
  }
}

.router-link-exact-active {
  background-color: rgba(#ffffff, 0.2);
}
</style>
