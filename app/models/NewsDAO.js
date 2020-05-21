function NewsDAO(connection) {
    this._connection = connection;

}

NewsDAO.prototype.getNews = function(callback) {

    this._connection.query('select * from news order by create_date desc', callback);
}

NewsDAO.prototype.getNews_detail = function(id_news, callback) {
    console.log(id_news.id_news);
    this._connection.query('select * from news where id_news = ' + id_news.id_news, callback);
}

NewsDAO.prototype.saveNews = function(news, callback) {
    this._connection.query('insert into news set ? ', news, callback);
}

NewsDAO.prototype.get5LastNews = function(callback) {
    this._connection.query('select * from news order by create_date desc limit 5', callback);
}

module.exports = () => {
    return NewsDAO;
}