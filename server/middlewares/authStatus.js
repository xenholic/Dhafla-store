"use strict"

const authStatus = async (req, res, next) => {
    try {
        const role = req.user.role


        if (role !== "admin") {
            throw new Error("Forbidden")
        }
        next()
    }
    catch (err) {
        next(err)
    }
}
module.exports = { authStatus }