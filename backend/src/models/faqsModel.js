const { sequelize, DataTypes, Model } = require("../config/dbConfig");

class Faqs extends Model {}

Faqs.init(
  {
    faq_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    faq_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    faq_description: {
        type: DataTypes.TEXT('long'),
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

module.exports = Faqs;
