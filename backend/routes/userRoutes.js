const express = require("express");
const userController = require("../controllers/userController");
const authenticateTokenUser = require("../middlewares/authenticateToken")

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/profile", authenticateTokenUser.authenticateTokenUser, userController.profile)
router.get("/coffeeShops", userController.getCoffeeShop); //list coffeshop

module.exports = router;
