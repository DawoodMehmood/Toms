import Subcategory from "../../src/models/subcategoryModel.js";

const SubcategoryAdminConfig = {
  resource: Subcategory,
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
    listProperties: [
      "subcategory_id",
      "subcategory_name",
      "category_id",
      "is_active",
    ],
    // editProperties: [
    //   "product_name",
    // ],
    filterProperties: ["subcategory_id", "subcategory_name", "is_active"],
    properties: {
      subcategory_id: {
        isVisible: { list: true, filter: true, show: true, edit: false },
        position: 100,
      },
      subcategory_name: {
        isTitle: true,
        position: 200,
      },
      category_id: {
        reference: "categories",
        position: 300,
      },
      is_active: {
        // isVisible: { list: true, filter: true, show: true, edit: false },
        position: 400,
      },
    },
  },
};

export default SubcategoryAdminConfig;
