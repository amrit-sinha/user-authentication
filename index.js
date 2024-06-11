const express = require("express");
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const authRoutes = require("./src/routes/authRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();

connectDB();

// Use Helmet to secure Express headers
app.use(helmet());
app.use(
  cors({
    origin: `${process.env.frontendURL}`,
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
