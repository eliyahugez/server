const validateCardWithJoi = require('./Joi/cardValidationWithJoi');

const validator = undefined || 'Joi';

function validateCard(card){
    if (validator == 'Joi') return validateCardWithJoi(card);
}

module.exports = validateCard;