let http = require('http');
let dt = require('../myFirstModule')


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('the date and time are currently : ' + dt.myDateTime());
    res.write('-----------------------');
    res.write(req.url);
}).listen(8080);


