const ObjectId  = Schema.Types.ObjectId
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (password) {
              // Validación de contraseña con al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial
              return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(
                password
              );
            },
            message:
              "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
          },
    },
    role: {
        type: String,
        enum: ['Admin', 'user'],
        default: "user"
    },
    friends: [
        {
            type: ObjectId,
            ref: 'User'
        }
    ]
})

const UserSchema = mongoose.model("User", userSchema);

module.exports = UserSchema