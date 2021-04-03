const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String
})

module.exports = (options = {}) => {
    return {
        name: 'User',
        mongoose: mongoose.model('users', userSchema)
    };
}