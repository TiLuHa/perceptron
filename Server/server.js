const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server_root_dir = process.argv[2]

if (typeof(server_root_dir) == "undefined")
{
    console.log("Give server root dir as argument")
    process.exit(1)
}

const server = http.createServer((req, res) => {
    var file = (server_root_dir + (req.url === "/" ? "/index.html" : req.url)).split("?")[0]
    console.log(file)

    if (fs.existsSync(file)){
        res.statusCode = 200;
        fs.createReadStream(file).pipe(res);
    }
    else{
        res.statusCode = 404;
    }
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });