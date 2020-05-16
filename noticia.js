var http = require('http');

var server = http.createServer((req, res) => {

    var category = req.url;

    if(category == '/technology'){
        res.end("<html><body>Technology News</body></html>");
    } else if (category == '/fashion') {
        res.end("<html><body>Fashion News</body></html>");
    } else {
        res.end("<html><body>News Portal</body></html>");
    }
});

server.listen(3000);