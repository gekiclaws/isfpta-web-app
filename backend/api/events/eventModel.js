const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    postDate: { type: Date, default: Date.now },
    eventDate: Date,
    body: String,
});

module.exports = mongoose.model('event', eventSchema);