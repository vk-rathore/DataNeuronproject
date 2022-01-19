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
  "mongodb+srv://vishaldatabase:vkrathore99@cluster0.fdin6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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

app.use(express.static(path.join(__dirname, "/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const port = process.env.PORT || 5000; //creating a server
app.listen(port, () => {
  console.log("Server Started");
});
