import { sequelize, DataTypes, Model } from "../config/dbConfig.js";

class Faqs extends Model {}

Faqs.init(
  {
    faq_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    faq_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    faq_description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Faqs",
    tableName: "faqs",
    timestamps: true,
  }
);

export default Faqs;
