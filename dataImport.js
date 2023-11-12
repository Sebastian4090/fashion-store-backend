import express from 'express';
import User from './Models/userModel.js';
import users from './Data/users.js';
import Product from './Models/productModel.js'
import all_products from './Data/allProducts.js';
import asyncHandler from 'express-async-handler';


const importData = express.Router();

importData.post("/user", asyncHandler(async (req, res) => {
    await User.deleteMany({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
    })
)

importData.post("/products", asyncHandler(async (req, res) => {
    await Product.deleteMany({});
    const importProduct = await Product.insertMany(all_products);
    res.send({ importProduct });
    })
)



export default importData;