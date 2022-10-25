<template>
  <div class="header">
    <button class="btn" @click="$store.commit('toggleIsClosed')">
      <Icon class="iconBtn" name="menu" />
    </button>

    <img class="icon" src="@/assets/vue.svg" alt="" />
    <span class="title">Тестовое задание</span>
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
}

.icon {
  margin-right: 15px;
  width: 40px;
  height: 40px;
  object-fit: cover;
}

.title {
  font-size: var(--fz-l);
}

.btn {
  cursor: pointer;
  background-color: transparent;
  border: none;
  margin-right: 15px;
}

.iconBtn {
  width: 25px;
  height: 25px;
  fill: white;
}
</style>
