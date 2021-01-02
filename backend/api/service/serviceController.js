const mongoose = require('mongoose');
const service = mongoose.model('service');

// Create
function createService(req, res) {
    const newService = new service(req.body);
    newService.save((err, service) => {
        if (err) res.send(err);
        res.json(service);
    });
}

// Read
function readService(req, res){
    service.findById(req.params.serviceId, (err, service) => {
        if (err) res.send(err);
        res.json(service);
    });
}

function listAllService(req, res) {
    service.find({}, (err, service) => {
        if (err) res.send(err);
        res.json(service);
    });
}

// Update
function updateService(req, res){
    service.findOneAndUpdate(
        { _id: req.params.serviceId },
        req.body,
        { new: true },
        (err, service) => {
          if (err) res.send(err);
          res.json(service);
        }
    );
}

// Delete
function deleteService(req, res){
    service.deleteOne({ _id: req.params.serviceId }, err => {
        if (err) res.send(err);
        res.json({
          message: 'service successfully deleted',
         _id: req.params.serviceId
        });
      });
}

module.exports = {
    createService: createService,
    readService: readService,
    listAllService: listAllService,
    updateService: updateService,
    deleteService: deleteService,
};