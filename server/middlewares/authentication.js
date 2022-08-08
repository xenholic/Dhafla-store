"use strict"

const { verifyTokenData } = require("../helpers/index")
const { User, Customer } = require("../models/index")

const authenticationUser = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token;
        if (!access_token) {
            throw { name: "Invalid User Token" }
        }

        const userPayload = verifyTokenData(access_token)
        const id = userPayload.id
        const foundUser = await User.findByPk(id)

        if (!foundUser) {
            throw { name: "Invalid User token" };
        }

        req.user = {
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role
        }
        next();
    } catch (err) {
        next(err)
    }
}

const authenticationCustomer = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token;
        if (!access_token) {
            throw { name: "Invalid Customer Token" }
        }

        const customerPayload = verifyTokenData(access_token)
        const id = customerPayload.id
        const foundCustomer = await Customer.findByPk(id)

        if (!foundCustomer) {
            throw new Error("Invalid Customer Token");
        }

        req.customer = {
            id: foundCustomer.id,
            email: foundCustomer.email,
            username: foundCustomer.username
        }
        next();
    } catch (err) {
        next(err)
    }
}


module.exports = { authenticationUser, authenticationCustomer }