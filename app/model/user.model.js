const UserSchema = require("../schema/user.schema.js");

const user = {
  email: "",
  password: "",
  isAdmin: false,
  month: "",
};

const admin = {
  ...user,
  email: "gal160693@gmail.com",
  password: "12345",
  isAdmin: true,
};

let DB = { "1q2w": admin }; // save data in-memory as a document object

module.exports = {
  deleteItem: async function (uuid) {
    return new Promise((resolve, reject) => {
      try {
        UserSchema.UserSchema.methods.delete(uuid);
        console.log("Deleted Object with " + uuid);

        resolve(uuid);
      } catch {
        reject(uuid);
      }
    });
  },

  saveItem: async function (data) {
    return new Promise((resolve, reject) => {
      let uuid = generateID();

      try {
        const schema = {
          _id: uuid,
          email: data.email,
          password: data.password,
          isAdmin: false,
          month: new Date().getMonth() + 1,
        };
        UserSchema.UserSchema.methods.create(schema);
        console.log("Saved Object with " + uuid);

        resolve(uuid);
      } catch {
        reject(uuid);
      }
    });
  },

  getById: function (uuid) {
    return new Promise((resolve, reject) => {
      try {
        const req = UserSchema.UserSchema.methods.findType(uuid);
        console.log("Got Object with " + uuid);

        resolve(uuid);
        return req;
      } catch {
        reject(uuid);
      }
    });
  },

  getAll: async function () {
    console.log("getall");
    const req = await UserSchema.find();
    console.log("req", req);
    return req;
  },

  getAll1: function () {
    return new Promise((resolve, reject) => {
      try {
        const req = UserSchema.find();
        console.log("Got all Objects");

        resolve(req);
        return req;
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  },

  updateExisting: function (uuid, newObj) {
    return new Promise((resolve, reject) => {
      try {
        UserSchema.UserSchema.methods.update(uuid, newObj);
        console.log("Updated Object with " + uuid);

        resolve(uuid);
      } catch {
        reject(uuid);
      }
    });
  },
};

function generateID() {
  return Date.now();
}
