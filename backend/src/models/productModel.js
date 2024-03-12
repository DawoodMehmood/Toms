const { sequelize, DataTypes, Model } = require("../config/dbConfig");

class Product extends Model {}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10, 2),
    subcategory_id: {
      type: DataTypes.INTEGER,
      references: { model: "subcategories", key: "subcategory_id" },
    },
    flag: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
    is_new_arrival: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_on_sale: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    Is_Active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    discount_price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      allowNull: true,
    },
    image_urls: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    is_tailorable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    color_tile_image: DataTypes.TEXT,
    variant_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    product_details: DataTypes.TEXT,
    size_and_fit: DataTypes.TEXT,
    fabric: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: true,
  }
);

module.exports = Product;
