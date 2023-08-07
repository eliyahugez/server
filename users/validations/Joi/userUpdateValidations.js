import loginValidations from "./loginValidations";
import registerValidations from "./registerValidations";
const validator = undefined || 'Joi';

const validateRegistertion=(user) =>{
    if (validator == 'Joi') return registerValidations(card);
}
const validateLogin=(user) =>{
    if (validator == 'Joi') return loginValidations(card);
}

module.exports = validateRegistertion;
module.exports = validateLogin;
