// import Product from "./productModel.js";
// import Category from "./categoryModel.js";
// import Color from "./colorModel.js";
// import Measurement from "./measurementModel.js";

// export const setupAssociations = () => {
//   Category.hasMany(Product, {
//     foreignKey: "category_id",
//     onDelete: "CASCADE",
//   });
//   Product.belongsTo(Category, {
//     foreignKey: "category_id",
//   });

//   Color.belongsToMany(Product, {
//     through: "product_colors",
//     foreignKey: "color_id",
//     onDelete: "CASCADE",
//   });
//   Product.belongsToMany(Color, {
//     through: "product_colors",
//     foreignKey: "product_id",
//     onDelete: "CASCADE",
//   });

//   Product.belongsToMany(Measurement, { through: "ProductMeasurements" });
//   Measurement.belongsToMany(Product, { through: "ProductMeasurements" });
// };
