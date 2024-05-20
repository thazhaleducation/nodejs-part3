// Syntax Error
// let ipdi_panna_koodathu =;

// Reference Error
// yedho_oru_variable();


// Range Error
// const callme = () => callme();
// callme();  
// try {
//   callme();  
// } catch (error) {
//   console.error("You called me too much");
//   console.error(error.name)
//   console.error(error.message)
//   dont_call_me();
// }

// Assertion error
// const assert = require('node:assert');
// assert.equal(1, 2);

// System Error
const fs = require('node:fs');

fs.readFile("./abc.txt", (err, data) => {
  if (err) {
    console.error("Error in reading the file");
    console.error(err.message);
    console.error(err.code);
    console.log(err);
    return;
  }
  console.log("Reading the file...");
  console.log(data);
})

