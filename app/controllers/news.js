module.exports.news = (app, req, res) => {
    var connection = app.config.dbConnection();
        var newsModel = new app.app.models.NewsDAO(connection);

        newsModel.getNews((error, result) => {
            res.render("news/news", {news: result});
        });
}

module.exports.news_detail = (app, req, res) => {
    var connection = app.config.dbConnection();
        var newsModel = new app.app.models.NewsDAO(connection);

        var id_news = req.query;

        newsModel.getNews_detail(id_news, (error, result) => {
            res.render("news/news_detail", {news_detail: result});
        });
}
