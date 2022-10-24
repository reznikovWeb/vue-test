<template>
  <li>
    <button class="btn">
      <Icon :name="item.icon" class="img" />
      <span>{{ item.title }}</span>
    </button>
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
.btn {
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
</style>
