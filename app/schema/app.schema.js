const mongoose =require('mongoose');

const {Schema} = mongoose;


const MessageSchema = new Schema({
    _id: Number, // represents Date.Now()
    message: String, // String is shorthand for {type: String}
    author: String,
    category: String,
    recipient: String,
    max_retries_to_send: Number,
});

MessageSchema.methods.create = async function (obj) {
    return mongoose.model('MessageSchema').create(obj);
}
MessageSchema.methods.findType = function (uuid) {
    return mongoose.model('MessageSchema').findOne({_id: uuid});
}
MessageSchema.methods.findAll = function () {
    return mongoose.model('MessageSchema').find();
}
MessageSchema.methods.update = function (uuid, newObj) {
    return mongoose.model('MessageSchema').updateOne({_id: uuid}, newObj);
}
MessageSchema.methods.delete = function (uuid) {
    return mongoose.model('MessageSchema').deleteOne({_id: uuid});
}
