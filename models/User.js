const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String,
        maxlength: 50
    },
    email : {
        type: String,
        trim: true, //space 없애주는 역할 ex)baek junwon
    },
    password : {
        type: String,
        maxlength: 5
    },
    lastname : {
        type: String,
        maxlength: 50
    },
    role : {
        type: Number,
        default: 0
    },
    image : String,
    token: {
        type: String
    },
    tokenExp : {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = {User} //다른 파일에서 사용할 수 있게 export