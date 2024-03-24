const CategoryOptions = {
  actions: {
    show: {
      showInDrawer: true,
    },
  },
  sort: {
    sortBy: "category_id",
    direction: "desc",
  },
  listProperties: ["category_id", "name", "is_active", "parent_id", "sorting"],
  // editProperties: [
  //   "product_name",
  // ],
  filterProperties: [
    "category_id",
    "name",
    "is_active",
    "parent_id",
    "sorting",
  ],
  properties: {
    category_id: {
      isVisible: { list: true, filter: true, show: true, edit: false },
      position: 100,
    },
    name: {
      isTitle: true,
      position: 200,
    },
    is_active: {
      // isVisible: { list: true, filter: true, show: true, edit: false },
      position: 50,
    },
  },
};

export default CategoryOptions;
