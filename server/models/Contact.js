const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  relationship: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    match: [/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,"Must match a phone number!"]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
