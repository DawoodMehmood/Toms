import express from "express";
import colors from "colors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { setupAssociations } from "./src/models/association‏Model.js";
import { sequelize } from "./src/config/dbConfig.js";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";

import Product from "./src/models/productModel.js";
import Category from "./src/models/categoryModel.js";
import Subcategory from "./src/models/subcategoryModel.js";
import Color from "./src/models/colorModel.js";
import Faqs from "./src/models/faqsModel.js";

import productRoutes from "./src/routes/productRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import subcategoryRoutes from "./src/routes/subcategoryRoutes.js";
import colorRoutes from "./src/routes/colorRoutes.js";
import faqsRoutes from "./src/routes/faqsRoutes.js";
import measurementRoutes from "./src/routes/measurementRoutes.js";

import ProductAdminConfig from "./admin/adminjsConfigs/product.js";
import CategoryAdminConfig from "./admin/adminjsConfigs/category.js";
import SubcategoryAdminConfig from "./admin/adminjsConfigs/subcategory.js";
import Measurement from "./src/models/measurementModel.js";

import { componentLoader } from "./admin/components/components.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

//register sequelize adapter for adminjs
AdminJS.registerAdapter(AdminJSSequelize);

// Set up AdminJS
const adminJs = new AdminJS({
  databases: [sequelize], // Use your sequelize instance
  rootPath: "/admin",
  resources: [
    ProductAdminConfig,
    CategoryAdminConfig,
    SubcategoryAdminConfig,
    Color,
    Faqs,
    Measurement,
  ],
  branding: {
    companyName: "Femina Dubai",
  },
  componentLoader,
});
adminJs.watch();
// Build and use the AdminJS router
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    // Implement your authentication mechanism here
    // This is a placeholder; you should replace it with your actual auth logic
    return email === "admin@example.com" && password === "123";
  },
  cookiePassword: "some-secret-password-used-to-secure-cookie",
});

const app = express();
app.use(express.json());

app.use(adminJs.options.rootPath, adminRouter);

const allowedOrigins = ["https://<>.com", "http://localhost:3000"];

// CORS to allow requests
app.use(cors());
// app.use(
//   cors({
//     origin: allowedOrigins,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true, // Enable credentials (cookies, authorization headers, etc.)
//   })
// );

// // Parse application/json requests
// app.use(bodyParser.json({ limit: "50mb" }));

// // Parse application/x-www-form-urlencoded requests
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// //middleware
// app.use(express.json());

// routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subcategoryRoutes);
app.use("/api/colors", colorRoutes);
app.use("/api/faqs", faqsRoutes);
app.use("/api/measurements", measurementRoutes);
// app.post("/api/token/validate", middleware, (req, res) => {
//   // If the middleware passes, the token is valid
//   res.status(200).json({ valid: true });
// });

sequelize
  .sync({ force: false }) // `force: true` will drop existing tables
  .then(() => {
    setupAssociations();
    console.log(`Database synced and associations set up!`.bgMagenta.white);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`.bgCyan.white);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
