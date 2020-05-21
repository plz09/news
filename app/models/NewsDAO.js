function NewsDAO(connection) {
    this._connection = connection;

}

NewsDAO.prototype.getNews = function(callback) {

    this._connection.query('select * from news', callback);
}

NewsDAO.prototype.getNews_detail = function(callback) {
    this._connection.query('select * from news where id_news = 2', callback);
}

NewsDAO.prototype.saveNews = function(news, callback) {
    this._connection.query('insert into news set ?', news, callback);
}

NewsDAO.prototype.get5LastNews = function(callback) {
    this._connection.query('select * from news order by create_date desc limit 5', callback);
}

module.exports = () => {
    return NewsDAO;
}