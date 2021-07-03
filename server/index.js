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

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected To Database"));

const apiRouter = require("./routers/api");
app.use("/api/v1/", apiRouter);

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
