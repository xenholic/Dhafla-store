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
    await Customer.create({
        email: "testing@gmail.com",
        password: "123456",
        username: 'testing',
        phoneNumber: '0885544777',
    })
})

describe('Login Feature Test', () => {
    test('Login success with test email and password', (done) => {
        request(app)
            .post('/customers/login')
            .send({
                email: "testing@gmail.com",
                password: "123456",
            })
            .end(function (err, res) {
                expect(res.statusCode).toBe(200)
                expect(res.body.data).toHaveProperty("accessToken")
                expect(res.body.data).toHaveProperty("customerId")
                expect(res.body.data).toHaveProperty("email")
                expect(res.body.data).toHaveProperty("username")
                done()
            })
    })
    test('Login with wrong password', (done) => {
        request(app)
            .post('/customers/login')
            .send({
                email: "testing@gmail.com",
                password: "45775",
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(401)
                expect(res.body).toHaveProperty('message', 'User not found')
                done()
            })
    })
    test(`Login with unregistered e-mail`, (done) => {
        request(app)
            .post('/customers/login')
            .send({
                email: "salahemail@gmail.com",
                password: "123456",
            })
            .end(function (err, res) {
                expect(res.body.statusCode).toBe(401)
                expect(res.body).toHaveProperty('message', 'User not found')
                done()
            })
    });
});

afterAll(async () => {
    await Customer.destroy({
        where: {},
        cascade: true,
        truncate: true,
        restartIdentity: true
    })
})