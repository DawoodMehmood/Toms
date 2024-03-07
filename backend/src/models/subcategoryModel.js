const { sequelize, DataTypes, Model } = require("../config/dbConfig");

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
    },
  },
  {
    sequelize,
    modelName: "Subcategory",
    tableName: "subcategories",
    timestamps: true,
  }
);

module.exports = Subcategory;
