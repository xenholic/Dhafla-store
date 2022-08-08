const express = require("express")
const router = express.Router()
const { userController } = require("../controllers/user")

//login & Regist
router.post("/register", userController.userCreate)
router.post("/login", userController.userLogin)
router.post('/google-login', userController.googleSignIn)

module.exports = router