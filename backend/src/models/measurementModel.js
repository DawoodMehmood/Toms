import { sequelize, DataTypes, Model } from "../config/dbConfig.js";

class Measurement extends Model {}

Measurement.init(
  {
    measurement_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    measurement_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Measurement",
    tableName: "measurements",
    timestamps: true,
  }
);

export default Measurement;
