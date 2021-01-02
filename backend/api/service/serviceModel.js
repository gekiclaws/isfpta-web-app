const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: String,
    postDate: { type: Date, default: Date.now },
    // img: { 
    //     data: Buffer, 
    //     contentType: String 
    // }, 
    info: String
});

module.exports = mongoose.model('service', serviceSchema);