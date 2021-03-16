const connection = require('../database/bd')

module.exports = {
    
    //Método para cadastrar um produto
    async create(req, res) {

        //Cria o produto conforme os campos no body e o userId do Token
        try {
            const { name, description, price, images } = req.body

            if (images.length > 3) {
                return res.status(400).send({ error: 'Image Limit Exceeded' })
            }

            const [produto] = await connection('Products').returning('*').insert({ name, description, price, images, createBy: req.userId})

            return res.json(produto)

        } catch (err) {
            return res.status(400).send({ error: 'Product registration Failed' })
        }

    },

    //Metodo para listar todos os produtos
    async index(req, res) {

        try {

            const list = await connection('Products').join('Users', 'Users.id', '=', 'createBy')
                .select('Products.id','Products.name', 'description', 'price', 'images', 'createBy', 'Users.name as userName')

            return res.json(list)

        } catch (err) {
            return res.status(500).send(err)
        }
    },

    //Metodo para detalhar um unico produto
    async getByID(req, res) {

        //Exibe o produto com o Id informado
        try {

            const produto = await connection('Products').where({id: req.params.id})
                .select('name', 'description', 'price', 'images', 'createBy').first()

            if (produto) {
                return res.send(produto)
            } else {
                return res.status(404).send({ error: 'Product Not Found' })
            }

        } catch (err) {
            return res.status(500).send(err)
        }

    },

    //Metodo para atualizar o cadastro de um produto
    async update(req, res) {

        //Atualiza o produto com o Id informado conforme os campos no body e o userId do Token
        try {

            const { name, description, price, images } = req.body

            if (images.length > 3) {
                return res.status(400).send({ error: 'Image Limit Exceeded' })
            }
            const [product] = await connection('Products').returning(['id','name', 'description', 'price', 'images']).where({id: req.params.id})
            .update({ name, description, price, images })

            return res.json(product)

        } catch (err) {
            return res.status(400).send({ error: 'Product Update Failed' })
        }

    },

    //Metodo para deletar o cadastro de um produto
    async delete(req, res) {

        //Remove o produto com o Id informado
        try {

            const produto = await connection('Products').where({id: req.params.id})
                .del()

            return res.sendStatus(204)

        } catch (err) {
            return res.status(500).send(err)
        }
    }
}