const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authToken = require('../auth.json')


const router = express.Router()

function generateToken(params = {}){
    return jwt.sign(params, authToken.secret, {
        expiresIn: 86400
    })
}

router.post('/registro', async (req, res) => {

    const {email} = req.body

    try {

        if (await User.findOne({ email })){
            return res.status(400).send({ error: 'User Already Exists' })
        }

        const user = await User.create(req.body)

        user.password = undefined

        return res.send({ user, token: generateToken({id: user.id}) })

    } catch (err) {
        return res.status(400).send(err)
    }

})

router.post('/login', async (req, res)=>{
    
    const {email, password} = req.body

    const user = await User.findOne({email}).select('+password')

    if(!user){
        return res.status(400).send({error:'User Not Found'})
    }
    
    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({error: 'Invalid E-mail or Password'})
    }

    user.password = undefined


    res.send({user, token: generateToken({id: user.id})})

})

router.get('/registro', async (req, res)=>{

    return res.send('ok')
})



module.exports = app => app.use('/auth', router)