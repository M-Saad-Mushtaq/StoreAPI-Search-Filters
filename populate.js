const connectDB = require('./db/connect')
const product = require('./models/product')
const products = require('./products.json')


const start = async () => {
    try {
        await connectDB();
        await product.deleteMany();
        await product.create(products);
        console.log('Products Entered Successfully...');

        process.exit(0);
    } catch (error) {
        console.log(error);
    }
}

start();