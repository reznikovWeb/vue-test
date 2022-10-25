<template>
  <table class="table">
    <thead>
      <tr>
        <th class="rowHead" v-for="name in $store.state.table.columnName">
          {{ name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="columnItem in $store.state.table.data">
        <td class="rowBody" v-for="rowItem in columnItem">
          {{ rowItem }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  mounted() {
    this.$store.commit("increaseMenuItemClick");
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.rowHead,
.rowBody {
  padding: 12px 15px;
  border-bottom: 1px solid gray;
}
.rowHead {
}
</style>
