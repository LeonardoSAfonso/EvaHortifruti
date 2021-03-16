const jwt = require('jsonwebtoken')
const authToken = require('../auth.json')

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).send({error: 'No Token Provided'})
    }

    const parts = authHeader.split(' ')

    if(!parts.length == 2){
        return res.status(401).send({error: 'Token Error'})
    }

    const [ scheme, token] = parts

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: 'Token Error'})
    }

    jwt.verify(token, authToken.secret, (err, decoded)=>{
        if(err){
            return res.status(401).send({error: 'Invalid Token'})
        }

        console.log(decoded)
        req.userId = decoded.id

        return next()
    })
}