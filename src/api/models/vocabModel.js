const mongoose = require('mongoose')


const vocabSchema = new  mongoose.Schema({
    etymologies:String,
    definitions:String,
    synonyms:String,
    examples:String,
    iddd:String,

},{timestamps:true})

module.exports = mongoose.model('vocab',vocabSchema)