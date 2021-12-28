const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email: { type: String, maxlength: 255 },
    username: { type: String, maxlength: 600 },
    password: { type: String, maxlength: 255 },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('User', User);