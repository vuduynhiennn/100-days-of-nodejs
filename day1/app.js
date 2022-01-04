const http = require('http'); //load the http module

http.createServer((req, res) => {
    // tell the browser everything is ok
    res.writeHead(200, {
        'Content-Type': 'text-plain'
    });

    res.write('Hello World');

    // res.end();
}).listen(1340);