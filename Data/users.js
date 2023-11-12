import bcrypt from 'bcrypt';

const users = [
    {
        name: 'usrTest',
        email: 'test@gmail.com',
        password: bcrypt.hashSync('test123', 10)
    }
];


export default users;