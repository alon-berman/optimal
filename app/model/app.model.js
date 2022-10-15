import mongoose from "mongoose";

let DB = {}; // save data in-memory as a document object
import {MessageSchema} from "../schema/app.schema.js"

module.exports = {
    deleteItem: async function (uuid) {
        return new Promise((resolve, _) => {
            try {
                delete DB[uuid];
                resolve(uuid);
            } catch {
                resolve(null);
            }
        });
    },

    saveItem: async function (data) {
            console.log("Saved Object")
            let uid = generateID();

            const schema = {
                _id: uid, message: data.message, author: data.author, category: data.category,
                recipient: data.recepient, max_retries_to_send: data.max_retries_to_send
            };
            const Model = mongoose.model('MessageSchema', schema);

            const doc = new Model();
            doc._id = schema._id;
            await doc.save(); // works
    },

    getById: function (uuid) {
        return new Promise((resolve, _) => {
            try {
                resolve(DB[uuid]);
            } catch (error) {
                resolve(null);
            }
        });
    },

    getAll: function () {
        return new Promise((resolve, _) => {
            console.log(DB)
            resolve(DB);
        });
    },

    updateExisting: function (uuid, data) {
        return new Promise((resolve, _) => {
            if (DB.hasOwnProperty(uuid)) {
                DB[uuid]['message'] = data;
                resolve(uuid);
            } else {
                console.log("Failed to find message")
                resolve(null);
            }
        })
    }
}


function generateID() {
    return Date.now();
}