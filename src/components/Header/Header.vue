<template>
  <div class="header">
    <button class="header__btn" @click="$store.commit('toggleIsClosed')">
      <Icon class="header__iconBtn" name="menu" />
    </button>

    <Icon class="header__icon" name="vue" />
    <span class="header__title">Тестовое задание</span>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon";
export default {
  components: {
    Icon,
  },
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  grid-area: header;
  padding: 20px 10px;
  display: flex;
  align-items: center;

  &__icon {
    margin-right: 15px;
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  &__title {
    font-size: var(--fz-l);
  }

  &__btn {
    margin-right: 15px;

    @media (max-width: 500px) {
      display: none;
    }
  }

  &__iconBtn {
    width: 25px;
    height: 25px;
    fill: white;
  }
}
</style>
