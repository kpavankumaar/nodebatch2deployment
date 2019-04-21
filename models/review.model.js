let mongoose = require('mongoose');
module.exports = mongoose.model("review",{
    productId : { type:String, required: [true,'product id is mandatory']},
    subject: { type: String, required: [true, 'product id is mandatory'] },
    message: { type: String, required: [true, 'product id is mandatory'] },
    rating: Number
})
