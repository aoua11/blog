const { string } = require('joi');
const mongoose = require('mongoose');

module.exports = mongoose.model('blog' , { 
    title : String , 
    author : String,
    date  : Number ,
    content : String,
    image : String ,
});