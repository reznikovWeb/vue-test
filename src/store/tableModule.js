import data from "@/data/mockData.json";

export const tableModule = {
  state: function () {
    return {
      columnName: ["id", "Имя", "Компания", "e-mail", "Адрес"],
      data: data,
    };
  },
};
