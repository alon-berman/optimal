import mongoose from "mongoose";

let DB = {}; // save data in-memory as a document object
import {MessageSchema} from "../schema/app.schema.js"

module.exports = {
    deleteItem: async function (uuid) {
        MessageSchema.methods.delete(uuid);
    },

    saveItem: async function (data) {
        console.log("Saved Object")
        let uid = generateID();

        const schema = {
            _id: uid, message: data.message, author: data.author, category: data.category,
            recipient: data.recepient, max_retries_to_send: data.max_retries_to_send
        };
        MessageSchema.methods.create(schema);
    },

    getById: function (uuid) {
        return MessageSchema.methods.findType(uuid);
    },

    getAll: function () {
        return MessageSchema.methods.findAll();
    },

    updateExisting: function (uuid, newObj) {
        MessageSchema.methods.update(uuid, newObj);
    }
}


function generateID() {
    return Date.now();
}