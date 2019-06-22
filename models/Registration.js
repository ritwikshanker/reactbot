const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    registerDate: Date
});

var Registrations = mongoose.model('registration', registrationSchema);

