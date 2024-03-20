import { sequelize, DataTypes, Model } from "../config/dbConfig.js";

class OrderStatus extends Model {}

OrderStatus.init(
  {
    order_status_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "OrderStatus",
    tableName: "order_statuses",
    timestamps: false,
  }
);

export default OrderStatus;
