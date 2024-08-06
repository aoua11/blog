const Joi = require('joi');
exports.store = {
    title : Joi.string().required(),
    author : Joi.string().required(),
    date : Joi.number().positive().required(),
    content : Joi.string().required(),
}