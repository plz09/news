module.exports = (app) => {
    app.get('/form_news', (req, res) => {
        app.app.controllers.admin.form_add_news(app, req, res);
    });
 
    app.post('/news/save', (req, res) => {
        app.app.controllers.admin.news_save(app, req, res);

    });
}


