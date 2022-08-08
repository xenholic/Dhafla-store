"use strict"

const express = require("express")
const router = express.Router()
const customerController = require("../controllers/customer")
const { authenticationCustomer } = require("../middlewares/authentication")

router.get("/products", customerController.getAllProduct)
router.post("/register", customerController.registerCust)
router.post("/login", customerController.loginCust)
router.post("/google-signIn", customerController.googleSignInCustomer)
router.get("/products/:id", customerController.getAllProductById)
router.use(authenticationCustomer)
router.get("/favorites", customerController.getAllFavorite)
router.post("/favorites/:id", customerController.addNewFavorite)
router.delete("/favorites/:id", customerController.deleteFavorite)


module.exports = router