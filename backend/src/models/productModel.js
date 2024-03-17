import { sequelize, DataTypes, Model } from "../config/dbConfig.js";

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
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    subcategory_id: {
      type: DataTypes.INTEGER,
      references: { model: "subcategories", key: "subcategory_id" },
      allowNull: false,
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
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    discount_price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      allowNull: true,
    },
    discount_percentage: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      allowNull: true,
    },
    image_urls: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
      set(value) {
        // Split the string by comma and trim whitespace from each URL
        const urlsArray = value.split(",").map((url) => url.trim());
        this.setDataValue("image_urls", urlsArray);
      },
    },
    is_tailorable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    color_tile_image: { type: DataTypes.TEXT, allowNull: false },
    variant_ids: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    measurements: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: [],
    },
    product_details: { type: DataTypes.TEXT, allowNull: false },
    size_and_fit: { type: DataTypes.TEXT, allowNull: false },
    fabric: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: true,
  }
);

export default Product;
