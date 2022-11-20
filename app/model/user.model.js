const userSchema = require("../schema/user.schema.js");

module.exports = {
  deleteItem: async function (uuid) {
    return new Promise((resolve, reject) => {
      try {
        userSchema.User.methods.delete(uuid);
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
      let isAdmin = false;
      console.log("Data is"+ data);
      if ("isAdmin" in data){
        isAdmin = data.isAdmin
      }

      try {
        const user_registration_request = {
          _id: uuid,
          email: data.email,
          password: data.password,
          isAdmin: isAdmin,
          month: new Date().getMonth() + 1,
        };
        console.log("creating user..");
        userSchema.create(user_registration_request);
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
        const req = userSchema.userSchema.methods.findType(uuid);
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
    const req = await userSchema.find();
    console.log("req", req);
    return req;
  },

  getByEmailPass: async function (email, password) {
    const user = await userSchema.find({ email: email, password: password });
    if (user.length > 0){
      console.log("user found");
      return user;
    }
    console.log("user not found");
    return null;  
    
  },

  getAll1: function () {
    return new Promise((resolve, reject) => {
      try {
        const req = userSchema.find();
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
        userSchema.userSchema.methods.update(uuid, newObj);
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
