const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Number, // Overridden to represent Date.Now()
  email: String,
  password: String,
  isAdmin: Boolean,
  month: Number,
});

userSchema.methods.create = async function (obj) {
  return mongoose.model("userSchema").create(obj);
};
userSchema.methods.findType = function (uuid) {
  return mongoose.model("userSchema").findOne({ _id: uuid });
};
userSchema.methods.findAll = function () {
  return mongoose.model("userSchema").find();
};
userSchema.methods.update = function (uuid, newObj) {
  return mongoose.model("userSchema").updateOne({ _id: uuid }, newObj);
};
userSchema.methods.delete = function (uuid) {
  return mongoose.model("userSchema").deleteOne({ _id: uuid });
};

module.exports = mongoose.model("userSchema", userSchema);
