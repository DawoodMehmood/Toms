import { sequelize, DataTypes, Model } from "../config/dbConfig.js";
import bcrypt from "bcrypt";

const hashPassword = async (user) => {
  if (user.changed("password")) {
    const salt = await bcrypt.genSalt(10); // Salt rounds
    user.password = await bcrypt.hash(user.password, salt);
  }
};

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
    },
  }
);

export default User;
