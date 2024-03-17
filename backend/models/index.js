"use strict";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Sequelize from "sequelize";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
import configAll from "../config/config.js";
const config = configAll[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Dynamically import models
const importModelFiles = async () => {
  const files = fs.readdirSync(__dirname).filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  });

  for (const file of files) {
    const { default: modelFactory } = await import(path.join(__dirname, file));
    const model = modelFactory(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
};

// Call the async function to import model files
importModelFiles()
  .then(() => {
    console.log("All models were imported successfully.");
  })
  .catch((err) => console.error("Error importing models:", err));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
