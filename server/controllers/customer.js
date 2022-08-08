"use strict"

const { Customer, Favorite, Product, Category } = require("../models/index")
const { addToken, verifyPassword } = require("../helpers");
const { OAuth2Client } = require("google-auth-library");
const { CLIENT_ID } = process.env;
const { Op } = require('sequelize')

class customerController {

    static async googleSignInCustomer(req, res, next) {
        try {
            const client = new OAuth2Client(CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: req.body.credential,
                audience: CLIENT_ID,
            });
            const payload = ticket.getPayload();

            let email = payload.email;
            let customer = await Customer.findOne({
                where: {
                    email,
                },
            });
            if (customer) {
                let accessToken = addToken({
                    id: customer.id,
                    email: customer.email,
                    username: customer.username,
                });
                res.status(200).json({
                    accessToken,
                    email: customer.email,
                    username: customer.username,
                });
            } else {
                let username = payload.name.split(" ").join("_");
                let customer = {
                    username,
                    email,
                    password: "Goggle Sign In",
                };
                customer = await Customer.create(customer, { hooks: false })

                accessToken = addToken({
                    id: customer.id,
                    email: customer.email,
                    username: customer.username,
                })
                res.status(201).json({
                    message: "User Created Succesfully",
                    accessToken,
                    email,
                    username
                })
            }
        } catch (err) {
            next(err);
        }
    }

    static async registerCust(req, res, next) {
        try {
            const { username, email, password, phoneNumber } = req.body;
            const createCustomer = await Customer.create({
                email,
                password,
                username,
                phoneNumber,
            });
            res.status(200).json({
                statusCode: 200,
                data: createCustomer,
            });
        } catch (err) {
            next(err)
        }
    }

    static async loginCust(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email) {
                throw { name: "Email cannot be null" };
            }
            if (!password) {
                throw { name: "Password cannot be null" };
            }

            const foundCustomer = await Customer.findOne({
                where: {
                    email,
                },
            });

            if (!foundCustomer) {
                throw { name: "User not found" };
            }
            const comparePassword = verifyPassword(password, foundCustomer.password);

            if (!comparePassword) {
                throw { name: "User not found" };
            }

            const payloadUser = {
                id: foundCustomer.id,
                username: foundCustomer.username,
                email: foundCustomer.email,
            };

            const tokenUser = addToken(payloadUser);
            res.status(200).json({
                statusCode: 200,
                data: {
                    accessToken: tokenUser,
                    customerId: foundCustomer.id,
                    email: foundCustomer.email,
                    username: foundCustomer.username,

                },
            });
        } catch (err) {
            next(err)
        }
    }

    static async getAllProduct(req, res, next) {
        try {

            let { page = 1, findCategory, searchName } = req.query
            let limit = 6
            let offset = (page - 1) * limit
            let getCategory = {}
            let getSearch = {}
            let option = {
                order: [["id", "ASC"]],
                include: [{
                    model: Category,
                    attributes: ['name']
                }
                ],
                where: {
                    status: "active",
                    ...getCategory,
                    ...getSearch
                },
                limit: limit,
                offset,
            }

            if (findCategory) {
                option.where = {
                    categoryId: findCategory
                }
            }
            if (searchName) {
                option.where = {
                    name: {
                        [Op.iLike]: `%${searchName}%`
                    },
                }

            }

            const getAllProduct = await Product.findAndCountAll(option)
            let totalPage = Math.ceil(getAllProduct.count / limit)

            res.status(200).json({
                statusCode: 200,
                data: {
                    totalPage,
                    getAllProduct
                }
            })
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async getAllProductById(req, res, next) {
        try {
            let productId = +req.params.id

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

    static async getAllFavorite(req, res, next) {
        try {
            const getAllFavorite = await Favorite.findAll({
                include: {
                    model: Product,
                },
            })

            res.status(200).json({
                statusCode: 200,
                data: getAllFavorite,
            })
        } catch (err) {
            next(err)
        }
    }

    static async addNewFavorite(req, res, next) {
        try {
            const productId = +req.params.id
            const { id } = req.customer

            const findProduct = await Product.findByPk(productId)
            console.log(productId, id, findProduct, "ini req");

            if (!findProduct) {
                throw { name: "DataError not found" }
            }

            await Favorite.findOrCreate({
                where: {
                    CustomerId: id,
                    ProductId: productId
                }
            })
            res.status(201).json({
                statusCode: 201,
                message: `${findProduct.name} has been added in favourite`
            })
        } catch (err) {
            next(err)
        }
    }

    static async deleteFavorite(req, res, next) {
        try {
            const { id } = req.params
            const deleteFavorite = await Favorite.destroy({
                where: {
                    id
                }
            })
            if (!deleteFavorite) {
                throw { name: "Product not found" }
            }

            res.status(200).json({
                statusCode: 200,
                message: "Product has been remove from your Favourite"
            })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = customerController