const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');


const user_data = require('./user_data'); // To be replaced when deployed
const signup = require('./Routes/RegisterRoutes.js');
const profile = require('./Routes/ProfileRoutes.js');
const { importData } = require('./dataImport');
const products = require('./Data/allProducts');

//Cannot be accessed without user_data file
const CONNECTION_URL = `mongodb+srv://${user_data.username}:${user_data.password}@fashion-store-db.ars8qan.mongodb.net/?retryWrites=true&w=majority`; 

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

app.get('/', (req, res) => {
    res.send('success');
})

// All products
app.get('/products', (req, res) => {
    res.json(products);
})

// Single product
app.get('/products/:id', (req, res) => {
    const product = products['all_products'].find((p) => p._id === req.params.id);
    res.json(product);
})

// app.use('/import', importData);

app.post('/sign-up', (req, res) => { signup.handleSignUp(req, res, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res)})
