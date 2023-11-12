const saltRounds = 10;

const handleSignUp = (req, res, bcrypt) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password ) {
        console.log('nie działa')
        return res.status(400).json('incorrect form submission')
    } 
    bcrypt.hash(password, saltRounds, (err, hash) => {
        return res.json('password', password, 'hash', hash)
    })
}


export default handleSignUp;