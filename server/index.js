const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(morgan("short"));
app.use(cors());
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({
    message: " Jellow Jewl",
  });
});

// Error Handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req}`);
  res.sendStatus(404);
  next(error);
});

app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: error.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
