const express = require ('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(routes)


app.listen(3333, ()=>console.log('Server is Running'))