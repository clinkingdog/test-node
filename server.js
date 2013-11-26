var http = require("http");
var url = require("url");

function start(router) {
  http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;

    if (path == "/favicon.ico") {
      response.end();
      return;
    }
    
    console.log("Request received: " + request.url);
    router.route(path);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello, Dave.");
    response.end();
  }).listen(8888);

  console.log("Node.js server started. Awaiting requests.");
}

exports.start = start;
