const ObjectId  = Schema.Types.ObjectId
const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    products: [
        {
            type: ObjectId,
            ref: 'Products'
        }
    ]
})

const CartSchema = mongoose.model("Cart", cartSchema);

module.exports = CartSchema