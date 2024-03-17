import Category from "../../src/models/categoryModel.js";

const CategoryAdminConfig = {
  resource: Category,
  options: {
    actions: {
      show: {
        showInDrawer: true,
      },
    },
    sort: {
      sortBy: "createdAt",
      direction: "desc",
    },
    listProperties: ["category_id", "category_name", "is_active"],
    // editProperties: [
    //   "product_name",
    // ],
    filterProperties: ["category_id", "category_name", "is_active"],
    properties: {
      category_id: {
        isVisible: { list: true, filter: true, show: true, edit: false },
        position: 100,
      },
      category_name: {
        isTitle: true,
        position: 200,
      },
      is_active: {
        // isVisible: { list: true, filter: true, show: true, edit: false },
        position: 300,
      },
    },
  },
};

export default CategoryAdminConfig;
