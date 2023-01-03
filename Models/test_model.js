const mongoose = require('mongoose');
const Registration = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true
    },
    gender : {
        type : String,
        require : true
    }, 
    course : {
        type : String,
        require : true
    }
});
module.exports = mongoose.model('collection1', Registration, 'collection1');