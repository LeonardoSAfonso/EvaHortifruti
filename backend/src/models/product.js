const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    name:{
        type: String,
        unique: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    images:{
        type: [String],
        items:{type:[String]},
        maxItems:3,
        minItems:0
    },
    createBy:{
        type: String
    }
    
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product