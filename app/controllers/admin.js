module.exports.form_add_news = (app, req, res) => {
    res.render("admin/form_add_news", {validation: {}, news: {}});

}

module.exports.news_save = (app, req, res) => {
    var news = req.body;
 
        req.assert('title','Title is mandatory').notEmpty();
        req.assert('resume','Summary is mandatory').notEmpty();
        req.assert('resume','The summary must be between 10 and 100 characters.').len(10, 100);
        req.assert('author','Author is mandatory').notEmpty();
        req.assert('news_date','Date is mandatory').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('news','News is mandatory').notEmpty();
 
        var errors = req.validationErrors();
        console.log(errors)
 
        if(errors) {
            res.render("admin/form_add_news", {validation: errors, news: news});
            return;
        }
 
        var connection = app.config.dbConnection();
        var newsModel = new app.app.models.NewsDAO(connection);
 
        newsModel.saveNews(news, (error, result) => {
            res.redirect('/news')
        });
}