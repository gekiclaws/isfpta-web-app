const newsBuilder = require('./newsController.js');
const express = require('express');

var router = express.Router();

router.route('')
    .get(newsBuilder.listAllNews)
    .post(newsBuilder.createNews);

router.route('/:newsId')
    .get(newsBuilder.readNews)
    .delete(newsBuilder.deleteNews)
    .post(newsBuilder.updateNews);

module.exports = router;