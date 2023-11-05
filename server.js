const express = require('express');
const cors = require('cors');

const signup = require('./controllers/signup.js');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('success');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

app.post('/sign-up', (req, res) => { signup.handleSignUp(req, res) })