// #region Imports
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
// #endregion Imports

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not a valid email`
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function() {
    return _.pick(this.toObject(), ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function() {
    var someSecretVal = '123abc'; // Will be salted & moved to config file

    var access = 'auth';
    var token = jwt.sign({
        _id: this._id.toHexString(),
        access
    }, someSecretVal).toString();

    this.tokens = this.tokens.concat([{access, token}]);

    return this.save().then(() => {
        return token;
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User}
