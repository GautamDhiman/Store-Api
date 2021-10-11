const { Decimal128 } = require('bson')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    featured:{type: Boolean, 
        default: false},

    rating:{type: Number,
        default: 4.5},

    name:{type: String,
        required: [true, 'name must be provided']},

    price:{type: Number,
        required: [true, 'price must be provided']},

    company:{ type: String,
        enum: ['ikea', 'liddy', 'caressa', 'marcos']},
    
        createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Product', productSchema);