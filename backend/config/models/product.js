const mongoose = require('../database/bd')

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
        type: Number,
        required: true
    },
    images:{
        type: [String],
        validate:[imageLimit, 'Limit']
    },
    createBy:{
        type: String,
        required: true
    },
    createIn:{
        type: Date,
        default: Date.now
    }
})

function imageLimit(val) {
    return val.length <= 3;
  }

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product