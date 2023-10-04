const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    unit: {
        type: String,
    },
    price: {
        type: Number
    }
})

const ProductSchema = mongoose.model("Product", productSchema);

module.exports = ProductSchema