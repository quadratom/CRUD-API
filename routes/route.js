const express = require('express')
const router = express.Router()
const {
    getAllProductsStatic,
    getAllProducts,
} = require('../controller/product')

router.route('/static').get(getAllProductsStatic)
router.route('/').get(getAllProducts)





module.exports = router