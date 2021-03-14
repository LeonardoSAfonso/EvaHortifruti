const express = require('express')

const User = require('../models/user')
const router = express.Router()

router.post('/registro', async (req, res) => {

    const {email} = req.body

    try {

        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'User Already Exists' })
        const user = await User.create(req.body)

        return res.send({ user })

    } catch (err) {
        return res.status(400).send(err)
    }

})

router.get('/registro', async (req, res)=>{

    return res.send('ok')
})

module.exports = app => app.use('/auth', router)