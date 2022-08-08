const express = require("express")
const router = express.Router()
const { productController } = require("../controllers/product")
const { auhorization } = require("../middlewares/authorization")
const { authStatus } = require("../middlewares/authStatus")

router.get("/", productController.readProduct)
router.get("/authors", productController.userList)
router.post("/", productController.addProduct)
router.get("/histories", productController.listHistory)
router.get("/:productId", productController.detailProduct)

//Must login to access
router.put("/:productId", auhorization, productController.editProduct)
router.delete("/:productId", auhorization, productController.deleteProduct)
router.patch("/:productId", authStatus, productController.addHistory)

module.exports = router