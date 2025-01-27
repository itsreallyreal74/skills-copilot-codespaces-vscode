// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file using the fs module.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comments.html', (err, data) => {
        res.write(data);
        res.end();
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});