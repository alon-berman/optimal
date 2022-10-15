import mongoose from 'mongoose';
const { Schema } = mongoose;


export const MessageSchema = new Schema({
    _id: Number, // represents Date.Now()
    message:  String, // String is shorthand for {type: String}
    author: String,
    category:   String,
    recepient: String,
    max_retries_to_send: Number,
});