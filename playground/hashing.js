const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123456';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$10$PsRjmo/RXrQBNavSX6zyVum1oRdnsxNiZ2mFXJBb87jpcnMOu.XHm';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});
