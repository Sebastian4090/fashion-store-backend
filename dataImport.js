const express = require('express');
const User = require('./Models/userModel');
const users = require('./Data/users');

const importData = express.Router();

importData.post('/user', async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({importUser});
})

module.exports = {
    importData
}