const Joi = require('joi');

const validateCardWithJoi = (card) => {
    const cardSchema = Joi.object({
        title: Joi.string().min(2).max(256).required(),
        subtitle: Joi.string().min(2).max(256).required(),
        description: Joi.string().min(2).max(1024).required(),
        phone: Joi.string().regex(/^(?:\+972|0)(?:\d{1,2})-?\d{3}-?\d{4}$/).rule({ message: 'Field must be Israel Phone Number' }).required(),
        web: Joi.string().regex(/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/).rule({ message: 'Field must be Valid web URL' }).required(),
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
        }),
        bizNumber: Joi.number().allow(null).optional(),
        user_id: Joi.string().optional(),
    });

    return cardSchema.validate(card);
};

module.exports = validateCardWithJoi;
