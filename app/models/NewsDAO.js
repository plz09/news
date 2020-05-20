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
    console.log(news);
    this._connection.query('insert into news set ?', news, callback);
}

module.exports = () => {
    return NewsDAO;
}