const mongoose = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost:27017/CRUD")
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e.message));
