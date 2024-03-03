const connectDB = require("./src/config/dbConfig");
const colors = require("colors");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
// const contactRoutes = require("./routes/contactRoutes");
// const menuRoutes = require("./routes/menuRoutes");
// const bannerRoutes = require("./routes/bannerRoutes");
// const linksRoutes = require("./routes/linksRoutes");
// const credentialRoutes = require("./routes/credentialRoutes");
// const adminRoutes = require("./routes/adminRoutes");
// const middleware = require("./middleware/jwtMiddleware");
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

const allowedOrigins = [
  "https://<bangbangseafood>.com",
  "http://localhost:3000",
];

// CORS to allow requests
app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  })
);

// Parse application/json requests
app.use(bodyParser.json({ limit: "50mb" }));

// Parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//middleware
app.use(express.json());

// routes
// app.use("/api/contact", contactRoutes);
// app.use("/api/menu", menuRoutes);
// app.use("/api/banner", bannerRoutes);
// app.use("/api/links", linksRoutes);
// app.use("/api/credential", middleware, credentialRoutes);
// app.use("/auth/admin", adminRoutes);
// app.post("/api/token/validate", middleware, (req, res) => {
//   // If the middleware passes, the token is valid
//   res.status(200).json({ valid: true });
// });

//database connection using mongoose
connectDB()
  .then(() => {
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log(`Server running on ${PORT}`.bgCyan.white);
    });
  })
  .catch((err) => {
    console.log(err);
  });
