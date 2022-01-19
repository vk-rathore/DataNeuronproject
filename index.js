const express = require("express");
const cors = require("cors");
const Routes = require("./routes/route");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ApiCount = require("./modal/count");

app.use(express.json());
app.use(cors());

app.all("*", async (req, res, next) => {
  const count = await ApiCount.find({ key: "API_COUNT" });
  console.log({ count });
  const update = await ApiCount.updateMany(
    { key: "API_COUNT" },
    {
      key: "API_COUNT",
      current: ((count.length && count[0].current) || 0) + 1,
    },
    { upsert: true }
  );
  console.log({ update });
  next();
});
mongoose.connect(
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});
mongoose.connection.on("error", async (err) => {
  console.log("err", err);
});

app.use("/api", Routes);

app.listen(5000, () => {
  console.log("Server Started");
});
