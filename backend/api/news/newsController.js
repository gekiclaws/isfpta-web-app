const mongoose = require('mongoose');
const news = mongoose.model('news');

// Create
function createNews(req, res) {
    const newNews = new news(req.body);
    newNews.save((err, news) => {
        if (err) res.send(err);
        res.json(news);
    });
}

// Read
function readNews(req, res){
    news.findById(req.params.newsId, (err, news) => {
        if (err) res.send(err);
        res.json(news);
    });
}

function listAllNews(req, res) {
    news.find({}, (err, news) => {
        if (err) res.send(err);
        res.json(news);
    });
}

// Update
function updateNews(req, res){
    news.findOneAndUpdate(
        { _id: req.params.newsId },
        req.body,
        { new: true },
        (err, news) => {
          if (err) res.send(err);
          res.json(news);
        }
    );
}

// Delete
function deleteNews(req, res){
    news.deleteOne({ _id: req.params.newsId }, err => {
        if (err) res.send(err);
        res.json({
          message: 'news successfully deleted',
         _id: req.params.newsId
        });
      });
}

module.exports = {
    createNews: createNews,
    readNews: readNews,
    listAllNews: listAllNews,
    updateNews: updateNews,
    deleteNews: deleteNews,
};