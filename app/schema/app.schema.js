import mongoose from 'mongoose';
const { Schema } = mongoose;


const MessageSchema = new Schema({
    message:  String, // String is shorthand for {type: String}
    author: String,
    category:   String,
    recepient: String,
    max_retries_to_send: Number,
});