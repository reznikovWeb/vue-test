<template>
  <div>Количество переходов: {{ this.$store.state.menuItemClick }}</div>
</template>

<script>
export default {
  name: "Google",
  mounted() {
    this.$store.commit("increaseMenuItemClick");
  },
};
</script>

<style scoped></style>
