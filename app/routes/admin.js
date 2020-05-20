module.exports = (app) => {
    app.get('/form_news', (req, res) => {
        res.render("admin/form_add_news");
    });
 
    app.post('/news/save', (req, res) => {
        var news = req.body;
 
        req.assert('title','Title is mandatory').notEmpty();
        req.assert('resume','Summary is mandatory').notEmpty();
        req.assert('resume','The summary must be between 10 and 100 characters.').len(10, 100);
        req.assert('author','Author is mandatory').notEmpty();
        req.assert('news_date','Date is mandatory').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('news','News is mandatory').notEmpty();
 
        var errors = req.validationErrors();
 
        if(errors) {
            res.render("admin/form_add_news");
            return;
        }
 
        var connection = app.config.dbConnection();
        var newsModel = new app.app.models.NewsDAO(connection);
 
        newsModel.saveNews(news, (error, result) => {
            res.redirect('/news')
        });
    });
}


