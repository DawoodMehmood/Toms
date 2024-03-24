import Product from "./productModel.js";
import Category from "./categoryModel.js";
import Color from "./colorModel.js";
import Measurement from "./measurementModel.js";
import Brand from "./brandModel.js";
import Size from "./sizeModel.js";
import Order from "./orderModel.js";
import Customer from "./customerModel.js";
import OrderStatus from "./orderStatusModel.js";
import ProductReview from "./productReviewsModel.js";

export const setupAssociations = () => {
  Category.hasMany(Product, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  });
  Product.belongsTo(Category, {
    foreignKey: "category_id",
  });

  // After defining the Category class and initializing it
  Category.hasMany(Category, {
    as: "children",
    foreignKey: "parent_id",
    useJunctionTable: false,
  });
  Category.belongsTo(Category, { as: "parent", foreignKey: "parent_id" });

  Brand.hasMany(Product, { foreignKey: "brand_id" });
  Product.belongsTo(Brand, { foreignKey: "brand_id" });

  //   Color.hasMany(Product, { foreignKey: "color_id" });
  //   Product.belongsTo(Color, { foreignKey: "color_id" });

  Product.belongsToMany(Color, {
    through: "product_colors",
    foreignKey: "product_id",
  });
  Color.belongsToMany(Product, {
    through: "product_colors",
    foreignKey: "color_id",
  });

  //   Product.belongsTo(Size, { foreignKey: "size_id" });
  //   Size.hasMany(Product, { foreignKey: "size_id" });

  Product.belongsToMany(Size, {
    through: "product_sizes",
    foreignKey: "product_id",
  });
  Size.belongsToMany(Product, {
    through: "product_sizes",
    foreignKey: "size_id",
  });

  //   Product.belongsToMany(Measurement, { through: "ProductMeasurements" });
  //   Measurement.belongsToMany(Product, { through: "ProductMeasurements" });

  Order.belongsTo(Customer, { foreignKey: "customer_id" });
  Customer.hasMany(Order, { foreignKey: "customer_id" });

  Order.belongsTo(OrderStatus, { foreignKey: "order_status_id" });
  OrderStatus.hasMany(Order, { foreignKey: "order_status_id" });

  Product.hasMany(ProductReview, { foreignKey: "product_id" });
  ProductReview.belongsTo(Product, { foreignKey: "product_id" });

  Customer.hasMany(ProductReview, { foreignKey: "customer_id" });
  ProductReview.belongsTo(Customer, { foreignKey: "customer_id" });
};
