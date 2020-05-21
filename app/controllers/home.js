module.exports.index = (app, req, res) => {

    var connection = app.config.dbConnection();
    var newsModel = new app.app.models.NewsDAO(connection);

    newsModel.get5LastNews((error, result) => {
        console.log(result);
        res.render("home/index", {news: result});
    });
}