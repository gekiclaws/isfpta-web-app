const serviceBuilder = require('./serviceController.js');
const express = require('express');

var router = express.Router();

router.route('')
    .get(serviceBuilder.listAllService)
    .post(serviceBuilder.createService);

router.route('/:serviceId')
    .get(serviceBuilder.readService)
    .delete(serviceBuilder.deleteService)
    .post(serviceBuilder.updateService);

module.exports = router;