const mongoose = require('mongoose');
const event = mongoose.model('event');

// Create
function createEvent(req, res) {
    const newEvent = new event(req.body);
    newEvent.save((err, event) => {
        if (err) res.send(err);
        res.json(event);
    });
}

// Read
function readEvent(req, res){
    event.findById(req.params.eventId, (err, event) => {
        if (err) res.send(err);
        res.json(event);
    });
}

function listAllEvents(req, res) {
    event.find({}, (err, events) => {
        if (err) res.send(err);
        res.json(events);
        console.log(events)
    });
}

// Update
function updateEvent(req, res){
    console.log(req.body);
    event.findOneAndUpdate(
        { _id: req.params.eventId },
        req.body,
        { new: true },
        (err, event) => {
          if (err) res.send(err);
          res.json(event);
        }
    );
}

// Delete
function deleteEvent(req, res){
    event.deleteOne({ _id: req.params.eventId }, err => {
        if (err) res.send(err);
        res.json({
          message: 'event successfully deleted',
         _id: req.params.eventId
        });
      });
}

module.exports = {
    createEvent: createEvent,
    readEvent: readEvent,
    listAllEvents: listAllEvents,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent,
};