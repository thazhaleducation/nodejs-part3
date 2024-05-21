// Handling error in Synchronous environment
const calculator = require('./calc');

console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));


try {
  calculator.add(1, "a");
} catch (err) {
  console.error(err);
}


// Handling error in Asynchronous environment - using call back param
const fs = require('node:fs');

fs.readFile("./abc.txt", (err, data) => {
  if (err) {
    if (err.code == 'ENOENT') {
      console.log('File Not found');
    } else {
      console.error(err);
    }
    return;
  }
  console.log("Reading the file...");
  console.log(data);
})


// Handling error in Asynchronous environment using promise catch
const { open } = require('node:fs/promises');

open('./abc.txt').then(file => {
    console.log(file)
  }).catch((err) => {
    console.log('Do nothing');
  }) ;
