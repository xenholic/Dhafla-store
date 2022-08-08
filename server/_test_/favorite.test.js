const request = require("supertest")
const app = require("../app")
const { Product, User, Customer, Favorite, Category } = require("../models/index")
const { addToken } = require("../helpers/index")
jest.setTimeout(1000)

let custToken = ""

beforeAll(async () => {
    try {
        await User.destroy({
            where: {},
            cascade: true,
            truncate: true,
            restartIdentity: true
        });
        await Category.destroy({
            where: {},
            cascade: true,
            truncate: true,
            restartIdentity: true
        });
        await Product.destroy({
            where: {},
            cascade: true,
            truncate: true,
            restartIdentity: true
        });
        await Customer.create({
            email: "customer12345@gmail.com",
            password: "123456",
            username: "testdataCustomer",
            phoneNumber: "8855777411",
        });
        await User.create({
            email: "test12345@gmail.com",
            password: "123456",
            username: "usertest",
            phoneNumber: "8855777411",
            role: "admin",
        });
        await Category.bulkCreate(require("../data/categories.json"));
        custToken = addToken({
            id: 1,
            email: `customer@gmail.com`
        })
        await Product.bulkCreate(require("../data/data-test.json")
        )
        await Favorite.bulkCreate([
            {
                CustomerId: 1,
                ProductId: 1
            },
            {
                CustomerId: 1,
                ProductId: 2
            }
        ])
    } catch (err) {
        console.log(err, "error dari favorite");
    }
})

describe("Test Get Favorite", () => {
    test("get all favorite from database", (done) => {
        request(app)
            .get("/customers/favorites")
            .set("access_token", custToken)
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200)
                expect(res.body.data.CustomerId).toBe(1)
                expect(res.body.data.ProductId).toBe(1)
                done()
            })
    })

    test("Add Product to Favorite", (done) => {
        request(app)
            .post('/customers/favorites/1')
            .set("access_token", custToken)
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200)
                expect(res.body.data.CustomerId).toBe(1)
                expect(res.body.data[0].ProductId).toBe(1)
                expect(res.body).toHaveProperty('message', 'test1 has been added in favourite')
                done()
            })
    })

    test("Add product to favorites with id does not exist", (done) => {
        request(app)
            .post('/customers/favorites/900')
            .set("access_token", custToken)
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(404)
                expect(res.err.message).toHaveProperty('message', 'Data is not found')
                done()
            })
    })
})

afterAll(async () => {
    await Customer.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true
    });
    await Category.destroy({
        where: {},
        cascade: true,
        truncate: true,
        restartIdentity: true
    });
    await User.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true
    });
    await Product.destroy({
        truncate: true,
        cascade: true,
        restartIdentity: true
    });
}) 