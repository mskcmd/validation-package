"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isPassword = isPassword;
exports.isLocation = isLocation;
exports.isPostalCode = isPostalCode;
exports.isDate = isDate;
exports.isURL = isURL;
exports.isPositiveNumber = isPositiveNumber;
exports.isBoolean = isBoolean;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isEmail = isEmail;
exports.isPhoneNumber = isPhoneNumber;
// Define custom error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
// Define color codes
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const RESET = '\x1b[0m';
// Helper function to log validation results
function logValidation(name, isValid, value) {
    const color = isValid ? GREEN : RED;
    const status = isValid ? 'VALID' : 'INVALID';
    console.log(`${color}[${status}] ${name}: ${JSON.stringify(value)}${RESET}`);
}
// Validation function template
function validateAndLog(name, validator, value) {
    try {
        const isValid = validator(value);
        logValidation(name, isValid, value);
        return isValid;
    }
    catch (error) {
        if (error instanceof ValidationError) {
            console.error(`Validation Error: ${error.message}`);
        }
        else {
            console.error('Unexpected error occurred:', error);
        }
        throw new ValidationError('Validation failed');
    }
}
// Validate if a value is a string
function isString(value) {
    if (typeof value !== 'string') {
        throw new ValidationError('Value must be a string');
    }
    return true; // Your existing validation logic here
}
// Validate if a value is a number
function isNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new ValidationError('Value must be a number');
    }
    return true; // Your existing validation logic here
}
// Validate if a string is a valid password
function isPassword(value, minLength = 8) {
    if (typeof value !== 'string' || value.length < minLength ||
        !/[A-Z]/.test(value) || !/[a-z]/.test(value) ||
        !/[0-9]/.test(value) || !/[^A-Za-z0-9]/.test(value)) {
        throw new ValidationError(`Password must be at least ${minLength} characters long and contain uppercase, lowercase, number, and special character`);
    }
    return true; // Your existing validation logic here
}
// Validate if a string is a valid location
function isLocation(value, maxLength = 50) {
    if (typeof value !== 'string' || value.trim().length === 0 || value.length > maxLength) {
        throw new ValidationError(`Location must not be empty and less than ${maxLength} characters`);
    }
    return true; // Your existing validation logic here
}
// Validate if a string is a valid postal code
function isPostalCode(value, country = 'US') {
    let pattern;
    switch (country.toUpperCase()) {
        case 'US':
            pattern = /^\d{5}(-\d{4})?$/;
            break;
        case 'UK':
            pattern = /^[A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2}$/;
            break;
        case 'IN':
            pattern = /^\d{6}$/; // India postal code format (6 digits)
            break;
        default:
            pattern = /^\d{5}$/;
    }
    if (typeof value !== 'string' || !pattern.test(value)) {
        throw new ValidationError(`Invalid postal code for ${country}`);
    }
    return true; // Your existing validation logic here
}
// Validate if a string is a valid date
function isDate(value, format = 'YYYY-MM-DD') {
    let pattern;
    switch (format) {
        case 'YYYY-MM-DD':
            pattern = /^\d{4}-\d{2}-\d{2}$/;
            break;
        case 'MM/DD/YYYY':
            pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
            break;
        default:
            pattern = /^\d{4}-\d{2}-\d{2}$/;
    }
    if (typeof value !== 'string' || !pattern.test(value)) {
        throw new ValidationError(`Invalid date format. Expected ${format}`);
    }
    return true; // Your existing validation logic here
}
// Validate if a string is a valid URL
function isURL(value) {
    const pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (typeof value !== 'string' || !pattern.test(value)) {
        throw new ValidationError('Invalid URL format');
    }
    return true; // Your existing validation logic here
}
// Validate if a value is a positive number
function isPositiveNumber(value) {
    if (typeof value !== 'number' || value <= 0) {
        throw new ValidationError('Value must be a positive number');
    }
    return true; // Your existing validation logic here
}
// Validate if a value is a boolean
function isBoolean(value) {
    if (typeof value !== 'boolean') {
        throw new ValidationError('Value must be a boolean');
    }
    return true; // Your existing validation logic here
}
// Validate if a value is an array
function isArray(value) {
    if (!Array.isArray(value)) {
        throw new ValidationError('Value must be an array');
    }
    return true; // Your existing validation logic here
}
// Validate if a value is an object
function isObject(value) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        throw new ValidationError('Value must be an object');
    }
    return true; // Your existing validation logic here
}
// Validate if a string is a valid email
function isEmail(value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (typeof value !== 'string' || !pattern.test(value)) {
        throw new ValidationError('Invalid email format');
    }
    return true; // Your existing validation logic here
}
// Validate if a string is a valid phone number (simplified validation)
function isPhoneNumber(value) {
    const pattern = /^\d{10}$/;
    if (typeof value !== 'string' || !pattern.test(value)) {
        throw new ValidationError('Invalid phone number format');
    }
    return true; // Your existing validation logic here
}
