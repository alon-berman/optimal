const mongoose =require('mongoose');

const {Schema} = mongoose;

const appointmentSchema = new Schema({
    _id: Number, // represents Date.Now()
    name: String, // String is shorthand for {type: String}
    email: String,
    visit_type: String,
    date: String,
    message: String,
});

appointmentSchema.methods.create = async function (obj) {
    return mongoose.model('appointmentSchema').create(obj);
}
appointmentSchema.methods.findType = function (uuid) {
    return mongoose.model('appointmentSchema').findOne({_id: uuid});
}
appointmentSchema.methods.findAll = function () {
    return mongoose.model('appointmentSchema').find();
}
appointmentSchema.methods.update = function (uuid, newObj) {
    return mongoose.model('appointmentSchema').updateOne({_id: uuid}, newObj);
}
appointmentSchema.methods.delete = function (uuid) {
    return mongoose.model('appointmentSchema').deleteOne({_id: uuid});
}

mongoose.model("appointmentSchema", appointmentSchema);

module.exports.appointment = appointmentSchema