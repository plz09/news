module.exports = (app) => {

    app.get('/news', (req, res) => {
        app.app.controllers.news.news(app, req, res);
    });

    app.get('/news_detail', (req, res) => {
        app.app.controllers.news.news_detail(app, req, res);
    });
};

