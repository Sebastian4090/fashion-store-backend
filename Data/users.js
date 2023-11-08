const bcrypt = require('bcrypt');

const user = [
    {
        name: 'usrTest',
        email: 'test@gmail.com',
        password: bcrypt.hashSync('test123', 10)
    }
];


module.exports = {
    user
}