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
  location: {},
  payment_deadline: {
    type: Date,
  },
/*   cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CartSchema",
    required: true
  }, */
  /*     guests:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserSchema",
        required: true
    }, */

  /*  QUIZAS ASI PODRIA SER (LO HICE PORQUE NECESITABA
        CONTROLARLO EN PAYASADERO)*/
/*   guests: [
    {
      user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserSchema",
        required: true
      },
      status: {
        type: String,
        enum: ['not paid', 'paid', 'paid confirmed'],
        required: true,
        default: 'not paid'
      },
/*       paid: {
        type: Boolean,
        required: true,
        default: false,
      },
      chef: {
        type: Boolean,
        required: true,
        default: false,
      }, 
    }
  ], */

    
});

const AsaderoSchema = mongoose.model("Asadero", asaderoSchema);

module.exports = AsaderoSchema;
