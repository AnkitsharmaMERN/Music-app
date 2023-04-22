const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Token: {
        type: String,
        // required: true
    },

    // here i make the favroute songs 
    favoriteProduct: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'productdetails'

        }
    ]

})


const User = mongoose.model('UserDetails', userSchema)

module.exports = User