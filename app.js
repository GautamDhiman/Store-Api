require('dotenv').config();
require('express-async-errors')
// async errors

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const connectDB = require('./db/storeDb');
const productRouter = require('./router/storeApi')

app.use(express.json());

// routes

app.get('/', (req, res) => {
    res.send('<h1>Store Api</h1> <a href="/api/v1/products">products route</a>');
})

app.use('/api/v1/products', productRouter);

// products route

app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 80

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log('connected to server...');
        })
    } catch (err) {
        
    }
}

start();