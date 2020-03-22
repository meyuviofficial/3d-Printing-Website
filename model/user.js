var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
    local:{
        email : String,
        password : String
    }
});

module.exports = mongoose.model('User', UserSchema);