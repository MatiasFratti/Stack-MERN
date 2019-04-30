const mongoose = require('mongoose');
const {Schema} =  mongoose;

const StateSchema =new Schema({
    _state:{type: String, required: true}
    
});

module.exports = mongoose.model('State', StateSchema);