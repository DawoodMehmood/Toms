const connectDB = require("./src/config/dbConnection");
const colors = require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const { setupAssociations } = require("./src/models/association‏Model");
const { sequelize } = require("./src/config/dbConfig");

const productRoutes = require("./src/routes/productRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");
const subcategoryRoutes = require("./src/routes/subcategoryRoutes");
const colorRoutes = require("./src/routes/colorRoutes");

// const middleware = require("./middleware/jwtMiddleware");
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

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
// app.use("/api/credential", middleware, credentialRoutes);
// app.use("/auth/admin", adminRoutes);
// app.post("/api/token/validate", middleware, (req, res) => {
//   // If the middleware passes, the token is valid
//   res.status(200).json({ valid: true });
// });

sequelize
  .sync({ force: false }) // `force: true` will drop existing tables
  .then(() => {
    setupAssociations();
    console.log(`Database synced and associations set up!`.bgMagenta.white);

    // Listen to port after successful database sync
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`.bgCyan.white);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
