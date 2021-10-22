const Product = require('../models/storeApi');

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({}).sort('-name price')
    res.status(200).json({ products });
}

const getAllProducts = async (req, res) => {
    
    const { featured, company, name, sort, fields } = req.query;
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

    let result = Product.find(queryObject);

    if(sort)
    {
        const sortList = sort.split(',').join(' ');
        // console.log(sortList);
        // console.log(sort);
        result = result.sort(sortList)
    }
    else
    {
        result = result.sort('createAt');
    }

    if(fields)
    {
        const fieldsList = fields.split(',').join(' ');
        // console.log(sortList);
        // console.log(sort);
        result = result.select(fieldsList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page-1)*limit;

    result = result.skip(skip).limit(limit);

    const products = await result;
    res.status(200).json({products , nbHits: products.length});
}

module.exports = { getAllProductsStatic, getAllProducts };