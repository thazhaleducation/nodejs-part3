const { Console } = require('node:console');
const fs = require('node:fs');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });

module.exports =  logger;