const request = require('supertest')
const app = require('../app')
const { User, Product, Category } = require('../models')
const { addToken } = require("../helpers/index")
jest.setTimeout(1000)

let access_token = "";

beforeAll(async () => {
    try {
        await User.create({
            email: "test12345@gmail.com",
            password: "123456",
            username: "usertest",
            phoneNumber: "8855777411",
            role: "admin",
        });

        await Category.bulkCreate(require("../data/categories.json"))
        access_token = addToken({
            id: 1,
            email: "test12345@gmail.com",
            role: "admin",
        });
        await Product.bulkCreate(require("../data/data-test.json"))
    }
    catch (err) {
        console.log(err, `Ini Error Testing`);
    }
});

describe("Test for products", () => {
    test("Get All Product Data", (done) => {
        request(app)
            .get("/customers/products")
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200);
                expect(res.body.data.getAllProduct.count).toBe(15);
                expect(res.body.data.getAllProduct.rows[0]).toHaveProperty("name");
                expect(res.body.data.getAllProduct.rows[0]).toHaveProperty("description");
                expect(res.body.data.getAllProduct.rows[0]).toHaveProperty("price");
                expect(res.body.data.getAllProduct.rows[0]).toHaveProperty("imgUrl");
                done();
            });
    });

    test("Get 1 Product Data with Search name Query", (done) => {
        request(app)
            .get("/customers/products?searchName=test1")
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200);
                expect(res.body.data.getAllProduct.rows[0]).toHaveProperty("name", "test1");
                done();
            });
    });

    test("Get all Product Data with Search name and findCategory", (done) => {
        request(app)
            .get("/customers/products?searchName=test1&findCategory=3")
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200);
                expect(res.body.data.getAllProduct.count).toEqual(7);
                done();
            });
    });

    test("Pagination Test on Product", (done) => {
        request(app)
            .get("/customers/products")

            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200);
                expect(res.body.data.getAllProduct.rows.length).toEqual(6)
                done();
            })
    })

    test("Pagination Test on Products with access_token", (done) => {
        request(app)
            .get("/customers/products")
            .set("access_token", access_token)
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200);
                expect(res.body.data.getAllProduct.rows.length).toEqual(6)
                done();
            })
    })

    test("Test Product detail by Id", (done) => {
        request(app)
            .get("/customers/products/5")

            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200);
                expect(res.body.data.name).toEqual("test5")
                done();
            })
    })

    test("Get Data product by Invalid Id thats not exist in data products", (done) => {
        request(app)
            .get("/customers/products/16")

            .end(function (err, res) {
                expect(res.body.statusCode).toBe(404);
                expect(res.body.message).toEqual("Data Product not Found")
                done();
            })
    })
});

afterAll(async () => {
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
});