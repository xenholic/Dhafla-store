const express = require("express")
const router = express.Router()
const { errorHandler } = require("../middlewares/errorHandler")
const { authenticationUser } = require("../middlewares/authentication")

router.use("/customers", require("./customer"))
router.use("/users", require("./user"))
router.use("/categories", require("./categories"))
// router.use(authenticationUser)
router.use("/products", require("./product"))

router.use(errorHandler);

module.exports = router