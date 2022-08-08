const request = require('supertest')
const app = require('../app')
const { Customer } = require('../models')
jest.setTimeout(1000)

beforeAll(async () => {
    await Customer.destroy({
        where: {},
        cascade: true,
        truncate: true,
        restartIdentity: true
    });
})


describe("Register Test for Customer", () => {
    test("Register success with true input", (done) => {
        request(app)
            .post("/customers/register")
            .send({
                email: "tesRegister@gmail.com",
                username: "tesBranded",
                password: "123456",
                phoneNumber: "5457889956"
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(200)
                expect(res.body.data).toHaveProperty("id")
                expect(res.body.data).toHaveProperty("email")
                done()
            })
    })

    test('Register Customer with null email', (done) => {
        request(app)
            .post('/customers/register')
            .send({
                password: "123456",
                username: "tesBranded",
                phoneNumber: "5457889956"
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(400)
                expect(res.body).toHaveProperty('message', 'E-mail cannot be null')
                done()
            })
    });

    test('Register Customer with Registerd email', (done) => {
        request(app)
            .post('/customers/register')
            .send({
                email: "tesRegister@gmail.com",
                password: "123456",
                username: "tesBranded",
                phoneNumber: "5457889956"
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(400)
                expect(res.body).toHaveProperty('message', 'E-mail already register')
                done()
            })
    });
    test('Register Customer with null Password', (done) => {
        request(app)
            .post('/customers/register')
            .send({
                email: "tesRegister@gmail.com",
                username: "tesBranded",
                phoneNumber: "5457889956"
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(400)
                expect(res.body).toHaveProperty('message', 'Password cannot be null')
                done()
            })
    });

    test('Register Customer with empty string email', (done) => {
        request(app)
            .post('/customers/register')
            .send({
                email: "",
                password: "123456",
                username: "tesBranded",
                phoneNumber: "5457889956"
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(400)
                expect(res.body).toHaveProperty('message', 'Input with true format')
                done()
            })
    });

    test('Register Customer with empty string password', (done) => {
        request(app)
            .post('/customers/register')
            .send({
                email: "tesRegister@gmail.com",
                password: "",
                username: "tesBranded",
                phoneNumber: "5457889956"
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(400)
                expect(res.body).toHaveProperty('message', 'Password is required')
                done()
            })
    });

    test('Register Customer with invalid format email', (done) => {
        request(app)
            .post('/customers/register')
            .send({
                email: "tesRegister",
                password: "123456",
                username: "tesBranded",
                phoneNumber: "5457889956"
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(400)
                expect(res.body).toHaveProperty('message', 'Input with true format')
                done()
            })
    });
})

afterAll(async () => {
    await Customer.destroy({
        where: {},
        cascade: true,
        truncate: true,
        restartIdentity: true
    })
}) 