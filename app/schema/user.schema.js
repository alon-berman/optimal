const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: Number, // represents Date.Now()
  email: String,
  password: String,
  isAdmin: Boolean,
  month: Number,
});

/*
UserSchema.methods.create = async function (obj) {
  return mongoose.model("userSchema").create(obj);
};
UserSchema.methods.findType = function (uuid) {
  return mongoose.model("UserSchema").findOne({ _id: uuid });
};
UserSchema.methods.findAll = function () {
  return mongoose.model("UserSchema").find();
};
UserSchema.methods.update = function (uuid, newObj) {
  return mongoose.model("UserSchema").updateOne({ _id: uuid }, newObj);
};
UserSchema.methods.delete = function (uuid) {
  return mongoose.model("UserSchema").deleteOne({ _id: uuid });
};
*/

module.exports = mongoose.model("UserSchema", userSchema);
