// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String, // Use String to accommodate various formats
        required: true,
        unique: true,
        required: 'This Mobile Number Already Used'
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User ', userSchema); // Ensure the model name is 'User '

module.exports = User;