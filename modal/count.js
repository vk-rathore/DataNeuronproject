const mongoose = require("mongoose");

const CountModel = new mongoose.Schema({
  key: String,
  current: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("count", CountModel);
