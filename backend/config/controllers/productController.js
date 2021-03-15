const express = require('express')
const authMiddleware = require('../middleware/auth')
const Product = require('../models/product')

const router = express.Router()

router.use(authMiddleware)

//Método para cadastrar um produto
router.post('/', async (req, res) => {

    try{

        //pega o usuário logado pelo token de acesso
        const userId = req.userId

        //pega os campos inseridos no body
        const {name, description, price, images} = req.body

        //cria o produto conforme os campos definidos anteriormente
        const product = await Product.create({
            name: name,
            description: description,
            price:price,
            images: images,
            createBy: userId
        })

        return res.send(product)

    }catch(err){
        return res.status(400).send({error: 'Product registration Failed'})
    }

})

//Metodo para listar todos os produtos
router.get('/', async (req, res) => {

    try{

        const list = await Product.find()

        return res.send(list)

    }catch(err){
        return res.status(500).send(err)
    }
})

router.get('/:id', async (req, res)=>{

    try{

        const id = req.params.id
        const produto = await Product.findById(id) 

        if(produto){
            return res.send(produto)
        }else{
            return res.status(404).send({error:'Product Not Found'})
        }

    }catch(err){
        return res.status(500).send(err)
    }

} )

module.exports = app => app.use('/produtos', router)