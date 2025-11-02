const mongo = require('mongoose')

const user= new mongo.Schema({
    username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const User = mongo.model('User', user);
module.exports = User;