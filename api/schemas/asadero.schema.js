const mongoose = require("mongoose");

const asaderoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    date_time: {
        type: Date,
    },
    duration: {
        type: Number,
    },
    price: {
        type: Number,
    },
    location: {
        
    },
    payment_deadline: {
        type: Date,
    },
/*     cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    },
    guests:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, */
});

const AsaderoSchema = mongoose.model("Asadero", asaderoSchema);

module.exports = AsaderoSchema;
