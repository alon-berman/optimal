const MessageSchema =require('../schema/app.schema.js');


const user = {
  firstName: "",
  lastName: "",
  phoneNr: "",
  email: "",
  password: "",
  isAdmin: false,
};

const admin = { ...user, email: "gal160693@gmail.com", password:"12345", isAdmin: true };

let DB = {"1q2w":admin}; // save data in-memory as a document object

module.exports = {
    deleteItem: async function (uuid) {
        return new Promise((resolve, reject) => {
            try {
                MessageSchema.MessageSchema.methods.delete(uuid);
                console.log("Deleted Object with " + uuid)

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
                    _id: uuid, message: data.message, author: data.author, category: data.category,
                    recipient: data.recipient, max_retries_to_send: data.max_retries_to_send
                };
                MessageSchema.MessageSchema.methods.create(schema);
                console.log("Saved Object with " + uuid)

                resolve(uuid);
            } catch {
                reject(uuid);
            }
        });
    },

    getById: function (uuid) {
        return new Promise((resolve, reject) => {
            try {
                const req = MessageSchema.MessageSchema.methods.findType(uuid);
                console.log("Got Object with " + uuid)

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
                const req = MessageSchema.MessageSchema.methods.findAll();
                console.log("Got all Objects")

                resolve();
                return req;
            } catch {
                reject();
            }
        });
    },

    updateExisting: function (uuid, newObj) {
        return new Promise((resolve, reject) => {
            try {
                MessageSchema.MessageSchema.methods.update(uuid, newObj);
                console.log("Updated Object with " + uuid)

                resolve(uuid);
            } catch {
                reject(uuid);
            }
        });
    }
}


function generateID() {
    return Date.now();
}