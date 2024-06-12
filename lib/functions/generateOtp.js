"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const digits = '0123456789';
const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabets = lowerCaseAlphabets.toUpperCase();
const specialChars = '#!&@';
const checkObj = (object, key) => {
    return Object.prototype.hasOwnProperty.call(object, key);
};
const generateOtp = (length, options) => {
    length = length || 10;
    const generateOptions = options || {};
    generateOptions.digits = checkObj(generateOptions, 'digits') ? options.digits : true;
    generateOptions.lowerCaseAlphabets = checkObj(generateOptions, 'lowerCaseAlphabets')
        ? options.lowerCaseAlphabets
        : true;
    generateOptions.upperCaseAlphabets = checkObj(generateOptions, 'upperCaseAlphabets')
        ? options.upperCaseAlphabets
        : true;
    generateOptions.specialChars = checkObj(generateOptions, 'specialChars') ? options.specialChars : true;
    const allowsChars = ((generateOptions.digits || '') && digits) +
        ((generateOptions.lowerCaseAlphabets || '') && lowerCaseAlphabets) +
        ((generateOptions.upperCaseAlphabets || '') && upperCaseAlphabets) +
        ((generateOptions.specialChars || '') && specialChars);
    let password = '';
    while (password.length < length) {
        const charIndex = (0, crypto_1.randomInt)(0, allowsChars.length);
        if (password.length === 0 && generateOptions.digits === true && allowsChars[charIndex] === '0') {
            continue;
        }
        password += allowsChars[charIndex];
    }
    return password;
};
exports.default = generateOtp;
