module.exports = (app) => {

    app.get('/news', (req, res) => {

        var connection = app.config.dbConnection();
        var newsModel = new app.app.models.NewsDAO(connection);

        newsModel.getNews((error, result) => {
            res.render("news/news", {news: result});
        });
    });
    
};
