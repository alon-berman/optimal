const AppointmentSchema = require("../schema/app.schema.js");

module.exports = {
  deleteItem: async function (uuid) {
    return new Promise((resolve, reject) => {
      try {
        AppointmentSchema.appointment.methods.delete(uuid);
        console.log("Deleted Object with " + uuid);

        resolve(uuid);
      } catch {
        reject(uuid);
      }
    });
  },

  saveItem: async function (data) {
    console.log("data", data);
    return new Promise((resolve, reject) => {
      let uuid = generateID();

      try {
        const schema = {
          _id: uuid,
          name: data.name,
          email: data.email,
          visit_type: data.visit_type,
          branch: data.branch,
          date: data.date,
          message: data.message,
        };
        AppointmentSchema.appointment.methods.create(schema);
        console.log("Saved Object with id " + uuid);

        resolve(uuid);
      } catch {
        reject(uuid);
      }
    });
  },

  getById: function (uuid) {
    return new Promise((resolve, reject) => {
      try {
        const req = AppointmentSchema.appointment.methods.findType(uuid);
        console.log("Got Object with " + uuid);

        resolve(uuid);
        return req;
      } catch {
        reject(uuid);
      }
    });
  },

  getAll: function () {
    return new Promise((resolve, reject) => {
      try {
        const req = AppointmentSchema.appointment.methods.findAll();
        console.log("Got all Objects");

        resolve(req);
        return req;
      } catch (err) {
        reject(err);
      }
    });
  },

  updateExisting: function (uuid, newObj) {
    return new Promise((resolve, reject) => {
      try {
        AppointmentSchema.appointment.methods.update(uuid, newObj);
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
