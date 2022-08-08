"use strict"

const { Product } = require("../models/index")

const auhorization = async (req, res, next) => {
    try {
        const { id, role } = req.user;
        const ProductId = +req.params.productId;
        const dataProduct = await Product.findByPk(ProductId)
        if (!Number(ProductId)) {
            throw new Error("Bad Request")
        }
        if (!dataProduct) {
            throw new Error("Data Error")
        }
        if (role === "staff") {
            if (id !== dataProduct.authorId) {
                throw new Error("Forbidden")
            }
        }
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = { auhorization }