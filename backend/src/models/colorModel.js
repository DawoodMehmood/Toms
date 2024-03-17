import { sequelize, DataTypes, Model } from "../config/dbConfig.js";

class Color extends Model {}

Color.init(
  {
    color_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    color_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hex_code: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Color",
    tableName: "colors",
    timestamps: true,
  }
);

export default Color;
