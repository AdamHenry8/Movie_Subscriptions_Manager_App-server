const mongoose = require('mongoose');

let UsersSchema = new mongoose.Schema({
    full_name: String,
    user_name: String,
    password: Number
});

module.exports = mongoose.model('users', UsersSchema);





