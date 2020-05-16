module.exports = (app) => {

    app.get('/news_detail', (req, res) => {

        var connection = app.config.dbConnection();
        var newsModel = new app.app.models.NewsDAO(connection);

        newsModel.getNews_detail((error, result) => {
            res.render("news/news_detail", {news_detail: result});
        });
    });
};