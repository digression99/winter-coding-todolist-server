const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    title : {
        type : String,
        default : "",
        required : true
    },
    content : {
        type : String,
        default : "",
        required : false
    },
    priority : {
        type : Number,
        default : null,
        required : false
    },
    isCompleted : {
        type : Boolean,
        default : false,
        required : false
    },
    expirationDate : {
        type : Date,
        default : null,
        required : false
    },
    dateCreated : {
        type : Date,
        default : Date.now
    },
    isExpirationNotified : {
        type : Boolean,
        default : false
    },
    isExpirationDateChecked : {
        type : Boolean,
        default : false
    },
    isPriorityChecked : {
        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('todo', todoSchema);