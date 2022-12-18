const mongoose = require('mongoose')

const USER_SCHEMA = mongoose.Schema({
    user: String,
    shortcutList: String,
    noteList: String
})

const User = mongoose.model("user_data", USER_SCHEMA);

module.exports = User;