const Product = require('../models/storeApi');

const getAllProductsStatic = async (req, res) => {
    throw new Error('testing async error');
    res.status(200).json({ msg: 'products testing route'});
}

const getAllProducts = async (req, res) => {
    
    const { featured, company, name } = req.query;
    const queryObject = {};

    if(featured)
    {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if(company)
    {
        queryObject.company = company;
    }

    if(name)
    {
        queryObject.name = { $regex: name, $options: 'i'};
    }

    const products = await Product.find(queryObject);
    res.status(200).json({products , nbHits: products.length});
}

module.exports = { getAllProductsStatic, getAllProducts };