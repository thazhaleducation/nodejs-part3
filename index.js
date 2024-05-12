const http = require('node:http');

const server = http.createServer(function(req, res) {
  console.log("Request Received");
  console.log(req.url);
  console.log(req.method);
  res.write("Your response processed successfully", function(err) {
    if (err) {
      console.error(err);
      console.log("Error in response sending");
    }
  })
  res.end();
});

server.listen(8000);
