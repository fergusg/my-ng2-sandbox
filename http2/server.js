var fs = require('fs');
var path = require('path');
var http2 = require('http2');

// The callback to handle requests
function onRequest(request, response) {
  var CWD = process.cwd();
  var url = request.url === "/" ? "index.html" : request.url;
  var filename = path.join(CWD, "../src/", url);

  // Reading file from disk if it exists and is safe.
  if ((filename.indexOf("..") === -1) && fs.existsSync(filename) 
    && fs.statSync(filename).isFile()) {
    console.log("200", request.url)
    response.writeHead('200');

    fs.createReadStream(filename).pipe(response);
  } else {
    console.error("404", request.url)
    response.writeHead('404');
    response.end();
  }
}

var server = http2.createServer({
  key: fs.readFileSync(path.join(__dirname, '/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, '/localhost.crt'))
}, onRequest);
server.listen(process.env.HTTP2_PORT || 3000);
