import { sequelize, DataTypes, Model } from "../config/dbConfig.js";

class Product extends Model {}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    category_id: {
      type: DataTypes.INTEGER,
      references: { model: "categories", key: "category_id" },
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
      defaultValue: false,
    },
    discount_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    discount_percentage: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    image_urls: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
      set(value) {
        const urlsArray = value.split(",").map((url) => url.trim());
        this.setDataValue("image_urls", urlsArray);
      },
    },
    is_tailorable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["Ready-made", "Custom-made"],
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "brand",
        key: "brand_id",
      },
    },
    size_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "sizes",
        key: "size_id",
      },
    },
    color_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "color",
        key: "color_id",
      },
    },
    color_tile_image: { type: DataTypes.TEXT, allowNull: true },
    // variant_ids: {
    //   type: DataTypes.JSON,
    //   allowNull: true,
    //   defaultValue: [],
    // },
    // measurements: {
    //   type: DataTypes.JSON,
    //   allowNull: true,
    //   defaultValue: [],
    // },
    product_details: { type: DataTypes.TEXT, allowNull: true },
    size_and_fit: { type: DataTypes.TEXT, allowNull: true },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Product;
