let http = require('http');
let fs = require('fs');
fs.unlink('myNewFile.txt', (err) => {
    if (err) throw err;
    console.log('File was saved')
});