const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/nn.js") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript');
        fs.createReadStream('view/nn.js').pipe(res);
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('view/index.html').pipe(res);
    }
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });