const Product = require('../models/storeApi');

const getAllProductsStatic = async (req, res) => {
    throw new Error('testing async error');
    res.status(200).json({ msg: 'products testing route'});
}

const getAllProducts = async (req, res) => {
    
    const products = await Product.find(req.query);

    if(!products)
    {
        return res.status(500).json({ msg: "nothing to see"});
    }

    res.status(200).json({products , nbHits: products.length});
}

module.exports = { getAllProductsStatic, getAllProducts };