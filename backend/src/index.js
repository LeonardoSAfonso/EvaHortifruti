const express = require ('express')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

require('../config/controllers/userController')(app)
require('../config/controllers/productController')(app)


app.listen(3000)