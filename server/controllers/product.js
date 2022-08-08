"use strict"

const { User, Product, Category, History } = require("../models/index")

class productController {

    static async readProduct(req, res, next) {
        try {
            let listproduct = await Product.findAll({
                include: [User, Category]
            })
            res.status(200).json({
                statusCode: 200,
                product: listproduct
            })

        } catch (err) {

            next(err)
        }
    }

    static async addProduct(req, res, next) {
        try {
            const { id: UserId, email } = req.user
            const { name, description, price, imgUrl, categoryId } = req.body

            let addItem = await Product.create({
                name,
                description,
                price,
                imgUrl,
                authorId: UserId,
                categoryId,
                status: "active"
            })

            const { id: productId } = addItem
            const NewUpdate = `New Product has been Added`
            await History.create({
                name: name,
                description: NewUpdate,
                updatedBy: email,
                productId: productId
            })

            res.status(201).json({
                statusCode: 201,
                message: "This Product has succesfully added",
                data: addItem,
            })
        } catch (err) {
            next(err)
        }
    }

    static async detailProduct(req, res, next) {
        try {
            let productId = +req.params.productId

            const detail = await Product.findByPk(productId)

            if (!detail) {
                throw { name: "DataError not found" }
            }
            res.status(200).json({
                statusCode: 200,
                message: "This Product Has been Show",
                data: detail,
            })
        } catch (err) {
            next(err)
        }
    }

    static async listHistory(req, res, next) {
        try {
            const readHistory = await History.findAll({
                order: [['id', 'DESC']]
            })

            res.status(200).json({
                statusCode: 200,
                readHistory,
            });

        } catch (err) {

            next(err)
        }
    }

    static async editProduct(req, res, next) {
        try {
            let userEmail = req.user.email
            let productId = +req.params.productId
            let { name, description, price, imgUrl, categoryId } = req.body

            let productedit = await Product.update({
                name,
                description,
                price,
                imgUrl,
                categoryId
            }, {
                where: {
                    id: productId
                },
                returning: true,
            })
            if (!productedit || productedit <= 0) {
                throw new Error(`Id Not Found`)
            }

            const NewUpdate = `Product with Id: ${productId} has been edited`
            await History.create({
                name: name,
                description: NewUpdate,
                updatedBy: userEmail,
                productId: productId
            })
            res.status(201).json({
                statusCode: 201,
                message: "This Product Successfully Update",
                data: productedit,
            })
        } catch (err) {
            next(err)
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const productId = req.params.productId
            const dataproduct = await Product.findByPk(productId)
            const deleteProduct = await Product.destroy({
                where: {
                    id: productId
                }
            })
            if (!deleteProduct) {
                throw new Error("Error")
            }
            res.status(200).json({
                statusCode: 200,
                message: `Product ${dataproduct.name} success deleted`
            })

        } catch (err) {
            next(err)
        }
    }

    static async readCategories(req, res, next) {
        try {
            const categories = await Category.findAll({
                order: [['id', 'asc']]
            })
            res.status(200).json({
                statusCode: 200,
                message: 'Ok',
                data: categories,
            })
            next()
        } catch (err) {
            next(err)
        }
    }

    static async userList(req, res, next) {
        try {
            const listUser = await User.findAll({
            })
            res.status(200).json({
                statusCode: 200,
                data: listUser
            })

        } catch (err) {
            next(err)
        }
    }

    static async addHistory(req, res, next) {
        try {
            let userEmail = req.user.email
            let idProduct = +req.params.productId
            let newStatus = req.body.status

            const dataProduct = await Product.findByPk(idProduct);

            const nameProduct = dataProduct.name
            const productStatus = dataProduct.status

            let product = await Product.update({
                status: newStatus,
            },
                {
                    where: {
                        id: idProduct
                    },
                    returning: true,
                })
            if (!product) {
                throw new Error(`Id Not Found`)
            }

            const NewUpdate = `Product with Id ${idProduct} updated ${productStatus} to ${newStatus}`
            await History.create({
                name: nameProduct,
                description: NewUpdate,
                updatedBy: userEmail,
                productId: idProduct
            })
            res.status(200).json({
                statusCode: 200,
                data: NewUpdate
            });
        } catch (err) {
            next(err)
        }
    }
}

module.exports = { productController }