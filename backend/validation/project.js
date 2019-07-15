const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProjectInput(data) {
    console.log('I am in the validate project function');
    let errors = {};
    // let projectName = data.name.toString();
    data.name = !isEmpty(data.name) ? data.name : '';

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};