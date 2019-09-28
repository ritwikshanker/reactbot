const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    registerDate: Date,
    medicine: {name: String, quantity: Number}
});

const Registrations = mongoose.model('registration', registrationSchema);

module.exports = Registrations;