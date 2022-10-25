<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="name in $store.state.table.columnName">
          {{ name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(columnItem, index) in $store.state.table.data"
        @click="$store.commit('setIsOpenTrue', { index })"
        :key="columnItem.guid"
      >
        <td
          class="cellBody"
          v-for="(rowItem, name) in columnItem"
          :data-label="rowItem[name]"
        >
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

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  tr {
    border-bottom: 1px solid gray;
  }
  td,
  th {
    padding: 12px 15px;
  }

  tbody {
    tr {
      cursor: pointer;
      transition: background-color 0.2s;
      &:hover {
        background-color: rgba(#fff, 0.2);
      }
    }
  }
}

@media (max-width: 1000px) {
  .table thead {
    display: none;
  }

  th,
  td {
    border-bottom: none;
  }
  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }
  .table tr {
    border-bottom: 2px solid gray;
  }
  .table td {
    text-align: left;
    position: relative;
  }
  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
}
</style>
