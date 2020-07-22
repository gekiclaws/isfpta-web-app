const eventBuilder = require('./eventController.js');
const express = require('express');

var router = express.Router();

router.route('')
    .get(eventBuilder.listAllEvents)
    .post(eventBuilder.createEvent);

router.route('/:eventId')
    .get(eventBuilder.readEvent)
    .delete(eventBuilder.deleteEvent)
    .post(eventBuilder.updateEvent);

module.exports = router;