const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: String,
    author: String,
    postDate: { type: Date, default: Date.now },
    body: String,
});

module.exports = mongoose.model('news', newsSchema);