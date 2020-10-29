const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    body: {type: String, default: ''},
    postDate: { type: Date, default: Date.now },
    eventDate: Date,
    
    venue: String,
    startTime: String,
    endTime: String,
    language: String,
    fees: String,
    // open: Boolean,
    speaker: String,
    speakerBlurb: {type: String, default: ''},
});

module.exports = mongoose.model('event', eventSchema);