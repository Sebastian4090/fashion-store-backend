const handleSignUp = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password ) {
        console.log('nie działa')
        return res.status(400).json('incorrect form submission')
    } else {
        console.log(`${name} ${email} ${password}`)
        return res.json(name + email + password)
    }
}

module.exports = {
    handleSignUp
}