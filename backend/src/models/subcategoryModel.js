import { sequelize, DataTypes, Model } from "../config/dbConfig.js";

class Subcategory extends Model {}

Subcategory.init(
  {
    subcategory_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    subcategory_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: { model: "categories", key: "category_id" },
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Subcategory",
    tableName: "subcategories",
    timestamps: true,
  }
);

export default Subcategory;
