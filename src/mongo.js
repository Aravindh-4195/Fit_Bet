const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/form")
  .then(() => {
    console.log("connection successful");
  })
  .catch(() => {
    console.log("connection unsuccesstion");
  });

const schema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const gymSchema = new mongoose.Schema({
  centerName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  flat_no: {
    type: String,
    require: true,
  },
  landmark: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  navigate: {
    type: String,
    require: true,
  },
  timings: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
});
const accounts = mongoose.model("accounts", schema);
module.exports = { accounts };

const gymAccounts = mongoose.model("gymAccounts", gymSchema);
module.exports = { gymAccounts };
