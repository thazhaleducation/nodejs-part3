const http = require('node:http');
const qs = require('node:querystring')
const URL = require('node:url');
const logger = require('./logger');
const { homePageResponse, contactPageResponse } = require("./handlers");

function responseErrHandler(err) {
  if (err) {
    logger.error(err);
    logger.log("Error in sending response");
    return;
  }
}


const server = http.createServer(function (req, res) {
  logger.log("Request Received");
  logger.log(req.url);
  logger.log(req.method);
  let url = URL.parse(req.url);
  logger.log(url.pathname);
  logger.log("query params : %o", qs.decode(url.query));

  if (req.method == 'GET' && url.pathname == "/home") {
    res.statusCode = 200
    res.write(homePageResponse(), responseErrHandler);
  } else if (req.method == 'GET' && url.pathname == "/contact") {
    res.statusCode = 200
    res.write(contactPageResponse(), responseErrHandler);
  } else if (req.method == 'POST' && url.pathname == "/register") {
    res.statusCode = 200;
    let data = '';
    req.on('data', function(chunk) {
      data += chunk;
    });

    req.on('end', function() {
      logger.log("Data in the request %s", data);
    });

    res.write("Registration successful", responseErrHandler);
  } else {
    logger.error("Bad request");
    res.statusCode = 400
    res.statusMessage = "Server only supports GET request.";
  }
  res.end();
});

server.listen(8000);