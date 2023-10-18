// src/modules/user/model.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  points: { type: Number, default: 1000 },
});

module.exports = mongoose.model('User', userSchema);