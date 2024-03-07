const Product = require("./productModel");
const Category = require("./categoryModel");
const Subcategory = require("./subcategoryModel");
const Color = require("./colorModel");

exports.setupAssociations = () => {
  Category.hasMany(Subcategory, { foreignKey: "category_id" });
  Subcategory.belongsTo(Category, { foreignKey: "category_id" });

  Subcategory.hasMany(Product, { foreignKey: "subcategory_id" });
  Product.belongsTo(Subcategory, { foreignKey: "subcategory_id" });

  Color.belongsToMany(Product, {
    through: "product_colors",
    foreignKey: "color_id",
  });
  Product.belongsToMany(Color, {
    through: "product_colors",
    foreignKey: "product_id",
  });
};
