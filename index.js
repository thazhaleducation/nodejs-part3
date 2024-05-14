const http = require('node:http');
const qs = require('node:querystring')
const URL = require('node:url');

function homePageResponse() {
  return "<html><head><title>Home Page</title></head><body>I am in Home page</body></html>"
}

function contactPageResponse() {
  return "<html><head><title>Contact Page</title></head><body>Contact @ thazhal software</body></html>"
}

function responseErrHandler(err) {
  if (err) {
    console.error(err);
    console.log("Error in sending response");
    return;
  }
}


const server = http.createServer(function (req, res) {
  console.log("Request Received");
  console.log(req.url);
  console.log(req.method);
  let url = URL.parse(req.url);
  console.log(url.pathname);
  console.log("query params : %o", qs.decode(url.query));

  if (req.method == 'GET' && url.pathname == "/home") {
    res.statusCode = 200

    res.write(homePageResponse(), responseErrHandler);
  } if (req.method == 'GET' && url.pathname == "/contact") {
    res.statusCode = 200

    res.write(contactPageResponse(), responseErrHandler);
  } else {
    res.statusCode = 400
    res.statusMessage = "Server only supports GET request.";
  }
  res.end();
});

server.listen(8000);
