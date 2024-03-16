const express = require("express");
const colors = require("colors");
const path = require("path");
const { connectDB } = require("./config/db_config");
const { errorHandler } = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

// DB Connection
connectDB();

const PORT = process.env.PORT || 8000;

// Body Parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// User Routes
app.use("/api/user", require("./routes/userRoutes"));

// Ticket Routes
app.use("/api/ticket", require("./routes/ticketRoutes"));

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"));

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  const __dirname = path.resolve();
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`.bgBlue.black);
});
