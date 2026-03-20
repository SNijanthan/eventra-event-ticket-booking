require("dotenv").config();

const express = require("express");
const authRoutes = require("./routers/auth.js");
const { connectToDatabase } = require("./config/database.js");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

//

connectToDatabase()
  .then(() => {
    console.log("Connected to database successfully");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Something went wrong, ${err.message}`);
  });
