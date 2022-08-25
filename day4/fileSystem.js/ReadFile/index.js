let http = require('http');
let fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('demo.html', (err, data) => {
        try {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        } catch (err) {
            console.log(err)
        }
    })
}).listen(8080);