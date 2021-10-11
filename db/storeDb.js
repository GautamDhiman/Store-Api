const mongoose = require('mongoose');

const connectDB = (url) => {
    console.log('connected to DB...')
    return mongoose.connect(url);
}

module.exports = connectDB;