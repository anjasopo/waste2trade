// src/modules/user/repository.js

const User = require('../models/usserModel');

class UserRepository {
  async createUser(userData) {
    return await User.create(userData);
  }

  async findUserByEmail(email) {
    return await User.findOne({ email });
  }
}

module.exports = UserRepository;
