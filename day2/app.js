const http = require('http');

function index (req, res) {
    res.writeHead(200);
    res.end('Hello world');
}

http.createServer(function (req, res) {
    if (req.url === '/') {
        return index(req, res);
    }
    res.writeHead(404);
    res.end(http.STATUS_CODES[404]);
}).listen(1490)