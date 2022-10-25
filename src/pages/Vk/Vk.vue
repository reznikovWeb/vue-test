<template>
  <div>Количество переходов: {{ this.$store.state.menuItemClick }}</div>
</template>

<script>
export default {
  name: "Vk",
  mounted() {
    this.$store.commit("increaseMenuItemClick");
  },
};
</script>

<style scoped></style>
