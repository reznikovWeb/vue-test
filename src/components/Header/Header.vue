<template>
  <div class="header">
    <img class="icon" src="@/assets/vue.svg" alt="" />
    <span class="title">Тестовое задание</span>
  </div>
</template>

<script>
export default {
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
</style>
