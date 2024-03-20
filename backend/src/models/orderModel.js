import { sequelize, DataTypes, Model } from "../config/dbConfig.js";

class Order extends Model {}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Customer",
        key: "customer_id",
      },
      onDelete: "CASCADE",
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    total_amount: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
    order_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "OrderStatus",
        key: "order_status_id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    timestamps: false,
  }
);

export default Order;
