var mysql = require('mysql');

var connMysql = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'news_portal'
    });
}

module.exports = () => {
    return connMysql;
}

        