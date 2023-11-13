const User = require("../models/userModel");

class UserRepository {
  async createUser(userData) {
    return await User.create(userData);
  }

  async findUserByEmail(email) {
    return await User.findOne({ email });
  }
}

module.exports = UserRepository;
