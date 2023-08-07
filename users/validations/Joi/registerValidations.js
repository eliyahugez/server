const Joi = require('joi');

const registerValidation =(user) => {
    const userSchema = Joi.object({
        first: Joi.string().min(2).max(256).required(),
        middle: Joi.string().min(2).max(256).optional(),
        last: Joi.string().min(2).max(256).required(),
       isBussines: Joi.boolean().required(),
       phone: Joi.string().regex(/^(?:\+972|0)(?:\d{1,2})-?\d{3}-?\d{4}$/).rule({ message: 'Field must be Israel Phone Number' }).required(),
       mail: Joi.string().regex(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
       ).rule({ message: 'Field must be Valid mail' }).required(),
       mail: Joi.string().regex(/^(?=.*[!@#$%^&*()_+={}[\]:;"'|<>?,./])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/
       ).rule({ message: 'Field must be Valid Password' }).required(),
       image: Joi.object().keys({
        url: Joi.string().regex(/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?:jpe?g|png|gif|bmp)$/).rule({ message: 'Field must be Valid web URL of image' }).required(),
        alt: Joi.string().min(2).max(256).required(),
    }),
    address: Joi.object().keys({
        state: Joi.string().min(2).max(256),
        country: Joi.string().min(2).max(256).required(),
        city: Joi.string().min(2).max(256).required(),
        street: Joi.string().min(2).max(256).required(),
        houseNumber: Joi.number().min(1).required(),
        zip: Joi.number().min(4).required(),
    }),
        bizNumber: Joi.number().allow(null).optional(),
        user_id: Joi.string().optional(),
    });

    return userSchema.validate(card);
};


module.exports = registerValidation;