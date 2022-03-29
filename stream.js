const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog3.txt');

readStream.on('data', (chunk) => {
    console.log('----- NEW CHUNK -----');
    console.log(chunk);
})


// console.log(readStream);