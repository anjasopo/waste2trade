// src/modules/user/service.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const UserRepository = require('../repositories/userRepository');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(userData) {
    const existingUser = await this.userRepository.findUserByEmail(userData.email);

    if (existingUser) {
      throw new Error('Email is already in use');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await this.userRepository.createUser({
      ...userData,
      password: hashedPassword,
    });

    return user;
  }

  async login(email, password) {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ userId: user._id }, config.secretKey, { expiresIn: '1h' });

    return { user, token };
  }
}

module.exports = UserService;
