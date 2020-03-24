var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
    FirstName : {type: String},
    LastName : {type: String},
    PhoneNo : {type: Number},
    Email : {type: String},
    Password : {type : String}
});
UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
module.exports.createUser = function (newUser, err, callback) {
    newUser.save(callback);
    console.log(err);
};