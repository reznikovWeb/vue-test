<template>
  <div>
    Общее количество переходов: {{ this.$store.state.pages.menuItemClick }}
  </div>
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
