<template>
  <div>Количество переходов: {{ this.$store.state.menuItemClick }}</div>
</template>

<script>
export default {
  data() {
    return {
      prevPath: "",
    };
  },
  name: "Main",
  mounted() {
    this.$store.commit("increaseMenuItemClick");
  },
};
</script>

<style lang="scss" scoped></style>
