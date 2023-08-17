const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    match: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g,
  },
  alt: {
    type: String,
    minlength: 2,
  },
});

const addressSchema = new mongoose.Schema({
  state: {
    type: String,
    minlength: 2,
  },
  country: {
    type: String,
    minlength: 2,
  },
  city: {
    type: String,
    minlength: 2,
  },
  street: {
    type: String,
    minlength: 2,
  },
  houseNumber: {
    type: Number,
    required: true,
  },
  zip: {
    type: Number,
  },
});

const schema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 2,
  },
  subtitle: {
    type: String,
    minlength: 2,
  },
  description: {
    type: String,
    minlength: 2,
  },
  phone: {
    type: String,
    match: /^(?:\+972|0)(?:\d{1,2})-?\d{3}-?\d{4}$/,
  },
  email: {
    type: String,
    match: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
  },
  web: {
    type: String,
    match: /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
  },
  image: imageSchema,
  address: addressSchema,
  bizNumber: {
    type: Number,
    minlength: 1,
    maxlength: 9,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  likes: {
    type: [String],
    default: [],
  },
});

const Card = mongoose.model("Card", schema);

module.exports = Card;
