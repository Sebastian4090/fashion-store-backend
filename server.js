const express = require('express');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');
const cors = require('cors');


const user_data = require('./user_data.js'); // To be replaced when deployed
const signup = require('./controllers/signup.js');
const profile = require('./controllers/profile.js');

//Cannot be accessed without user_data file
const CONNECTION_URL = `mongodb+srv://${user_data.username}:${user_data.password}@fashion-store-db.ars8qan.mongodb.net/?retryWrites=true&w=majority`; 
const CLIENT = new MongoClient(CONNECTION_URL);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('success');
})

app.post('/sign-up', (req, res) => { signup.handleSignUp(req, res, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res)})

CLIENT.connect()
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err));
