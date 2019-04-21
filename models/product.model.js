const mongoose = require('mongoose');

module.exports = mongoose.model('Product',{
    brand:{type:String,required: [true,'brand check']},
    model: { type: String, required: [true, 'model id needed'] },
    price:Number,
    inStock:Boolean
})