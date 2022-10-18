const fs = require('fs')
const logger = require('./logger.js')

// standard dataype for text file UTF-8
const string = "Hi! This is a new file that was created from the Node.js fs module :D"

const data = new Uint8Array(Buffer.from(string));

fs.writeFile('newFile.txt', data, (err) => {
    if (err) console.log(`Error: ${err}`);
    else {
        fs.readFile('newFile.txt', (err, data) => {
            if(err) console.log(`Error: ${err}`);
            else console.log(`This is the data from the new file: ${data}`)
        })
    }
})

// console.log(logger);
logger.logFunction('This is a console output from the logger module.')