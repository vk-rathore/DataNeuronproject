const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
  
})
module.exports = mongoose.model("user", UserModel)