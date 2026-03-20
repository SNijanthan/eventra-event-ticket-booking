const express = require("express");
require("dotenv").config();
const { connectToDatabase } = require("./config/database.js");

const app = express();

const port = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    console.log("COnnected to database successfully");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(`Something went wrong, ${err.message}`);
  });
