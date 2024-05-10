const fs = require("node:fs");


fs.writeFile("/tmp/nodejspart5.txt", "Explaining node filesystem", "utf-8", function(err) {
  if (err) {
    console.log(err);
    console.log("Failed to write");
  } else {
    console.log("Successfully Written!")
  }
});

// fs.writeFileSync("/tmp/nodejspart5.txt", "Explaining filesystem module synchronous", "utf-8");

// fs.readFile("./package.json", "utf-8", function(err, data) {
//   if(err) {
//     console.error(err);
//     console.log("Readfile failed");
//     return;
//   }
//   console.log(data);

// })