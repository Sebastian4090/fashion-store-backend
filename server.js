import express from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import cors from 'cors';


import { username, password } from './user_data.js';
import handleSignUp from './Routes/RegisterRoutes.js';
import handleProfileGet from './Routes/ProfileRoutes.js';
import all_products from './Data/allProducts.js';
import importData from './dataImport.js';
import productRoute from './Routes/ProductRoutes.js';
import { errorHandler, notFound } from './Middleware/Errors.js';

//Cannot be accessed without user_data file
const CONNECTION_URL = `mongodb+srv://${username}:${password}@fashion-store-db.ars8qan.mongodb.net/?retryWrites=true&w=majority`; 

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

app.use('/import', importData);
app.use('/products', productRoute);

app.use(notFound);
app.use(errorHandler);


app.post('/sign-up', (req, res) => { handleSignUp(req, res, bcrypt) })
app.get('/profile/:id', (req, res) => { handleProfileGet(req, res)})
