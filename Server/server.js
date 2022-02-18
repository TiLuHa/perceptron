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

function fixURL(url)
{
   if (url === "/")
      return "/index.html"

   if (url === "/notes")
      return "/notes/index.html"

   if (url === "/notes.css")
      return "/notes/notes.css"

   if (url === "/notes.md")
      return "notes/notes.md"

   return url;
}

const server = http.createServer((req, res) => {
    var file = (server_root_dir + fixURL(req.url)).split("?")[0]
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
