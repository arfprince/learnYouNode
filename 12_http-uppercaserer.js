const map = require("through2-map");
const http = require("http");
const port = process.argv[2];

const server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method !== "POST") {
    return res.end("send me a POST\n");
  }
  req
    .pipe(
      map((chunk) => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(res);
});

server.listen(port);
