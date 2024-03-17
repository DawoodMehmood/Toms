import { sequelize } from "./dbConfig";

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Database Connection has been established successfully.`.bgMagenta.white
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
