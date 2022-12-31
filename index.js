const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userData = require("./Module/user");
const expensesData = require("./Module/transactions");
const userExpData = require("./Route/Routers");
const { Router } = require("express");
const port = process.env.port || 5500;
const app = express();
app.use(express.json());
mongoose.set("strictQuery", true);
require("dns").lookup("www.google.com", function (err) {
  if (err) {
    checkInternet(false);
  } else {
    checkInternet(true);
  }
});

function checkInternet(isConnected) {
  if (isConnected) {
    mongoose
      .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
      .then(() => {
        console.log("DB connected...");
      })
      .catch((err) => {
        console.log("err");
      });
  } else {
    console.log("No internet.......");
  }
}
app.get("/", async (req, res) => {
  res.send("hey welcome to Tidan API");
});

app.post("/userExpenses", async (req, res) => {
  await userExpData(req, res);
});

app.listen(port, () => {
  console.log("running on " + port);
});
