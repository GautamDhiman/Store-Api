const express = require('express');
const router = express.Router();
const { getAllProductsStatic, getAllProducts } = require('../controllers/Store-Api');


router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)
router.route('/query').get(getAllProducts);


module.exports = router;