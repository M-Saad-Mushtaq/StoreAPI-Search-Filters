const express = require('express');
const connectDB = require('./db/connect')

const router = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

require('express-async-errors');

const app = express();

app.use(express.json());

app.use('/api/v1/products', router)


app.use(notFoundMiddleware);
app.use(errorMiddleware);


const start = async () => {
    try {
        await connectDB();
        app.listen(process.env.port,()=>{console.log(`Server listening on port ${process.env.port}....`);})
    } catch (error) {
        console.log(error);
    }
}

start();