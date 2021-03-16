const connection = require('../database/bd')


const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authToken = require('../auth.json')


function generateToken(params = {}){
        return jwt.sign(params, authToken.secret, {
            expiresIn: 86400
        })
    }

module.exports = {  

    async registro (req, res){

        const {name, email, password} = req.body

        //criptografa a senha antes de armazenala no banco
        const hash = await bcrypt.hash(password, 10)

        const [user] = await connection('Users').returning(['id','name', 'email']).insert({
            name,
            email,
            password: hash
        })
        
        res.json({user, token: generateToken({id: user.id})})

    },

    async login(req, res){
        
        const {email, password} = req.body

        const user = await connection('Users').where({email: email}).select('id','email', 'password').first()

        if(!user){
            return res.status(400).send({error:'User Not Found'})
        }
        
        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send({error: 'Invalid E-mail or Password'})
        }

        user.password = undefined


        res.json({user, token: generateToken({id: user.id})})

    },

    async index (req, res){

        try{

            const users = await connection('Users').select('*')
            
            return res.send(users)
        }catch(err){
            return res.status(500).send(err)
        }
    },

    async delete (req, res){
        try{

            const {password} = req.body

            const user = await connection('Users').where({id: req.userId}).select('id', 'password').first()
            
            if(!await bcrypt.compare(password, user.password)){
                return res.status(400).send({error: 'Invalid Password'})
            }

            const deleted = await connection('Users').where({id: user.id}).del()

            return res.status(200).send('Usuário deletado')

        }catch(err){
            return res.status(404)
        }
    }

}