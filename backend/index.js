import express from "express";
import session from "express-session";
import colors from "colors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import { setupAssociations } from "./src/models/association‏Model.js";
import { sequelize } from "./src/config/dbConfig.js";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { dark, light } from "@adminjs/themes";
import { DefaultAuthProvider } from "adminjs";

import Product from "./src/models/productModel.js";
import Category from "./src/models/categoryModel.js";
import Color from "./src/models/colorModel.js";
import Faqs from "./src/models/faqsModel.js";
import Brand from "./src/models/brandModel.js";
import Order from "./src/models/orderModel.js";
import Customer from "./src/models/customerModel.js";
import User from "./src/models/userModel.js";
// import ProductAdminConfig from "./admin/adminjsConfigs/product.js";
import CategoryAdminConfig from "./admin/adminjsConfigs/category.js";
import Measurement from "./src/models/measurementModel.js";

import productRoutes from "./src/routes/productRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import colorRoutes from "./src/routes/colorRoutes.js";
import faqsRoutes from "./src/routes/faqsRoutes.js";
import measurementRoutes from "./src/routes/measurementRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import productReviewsRoutes from "./src/routes/productReviewsRoutes.js";

import { componentLoader } from "./admin/components/components.js";
import ProductReview from "./src/models/productReviewsModel.js";
import OrderStatus from "./src/models/orderStatusModel.js";
import resources from "./admin/adminjsConfigs/resources.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

//register sequelize adapter for adminjs
AdminJS.registerAdapter(AdminJSSequelize);

// Set up AdminJS
const adminJs = new AdminJS({
  availableThemes: [dark, light],
  defaultTheme: "light",
  databases: [sequelize],
  rootPath: "/admin",
  locale: {
    language: "en",
  },
  resources: resources,
  branding: {
    companyName: "Femina Dubai",
    withMadeWithLove: false,
    favicon:
      "https://t4.ftcdn.net/jpg/03/30/46/65/360_F_330466544_hAf9RG0j4nHPUC3R3ee9Ei9znHluYLJ5.jpg",
    logo: false,
    // logo: "https://t4.ftcdn.net/jpg/03/30/46/65/360_F_330466544_hAf9RG0j4nHPUC3R3ee9Ei9znHluYLJ5.jpg",
  },
  componentLoader,
});

const authenticate = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    const matched = await bcrypt.compare(password, user.password);
    if (matched) {
      // Return the user object that will be available in AdminJS as currentAdmin
      return { email: user.email, id: user.user_id, name: user.name };
    }
  }
  return false;
};

const authProvider = new DefaultAuthProvider({
  authenticate,
});

// const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
//   authenticate: async (email, password) => {
//     // Implement your authentication mechanism here
//     // This is a placeholder; you should replace it with your actual auth logic
//     return email === "admin@example.com" && password === "123";
//   },
//   cookiePassword: "some-secret-password-used-to-secure-cookie",
// });

const authRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    provider: authProvider,
    cookieName: "adminjs",
    cookiePassword: "a-secure-and-random-cookie-password",
    // Additional express-session options here if needed
  },
  express()
);

const adminRouter = AdminJSExpress.buildRouter(adminJs);

const app = express();
app.use(express.json());

adminJs.watch();
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
app.use("/api/colors", colorRoutes);
app.use("/api/faqs", faqsRoutes);
app.use("/api/measurements", measurementRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/productReviews", productReviewsRoutes);
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
