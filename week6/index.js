const fs = require('fs')

// standard dataype for text file UTF-8
const string = "Hi! This is a new file that was created from the Node.js fs module :D"

const data = new Uint8Array(Buffer.from(string));

fs.writeFile('newFile.txt', data, (err) => {
    if (err) {
        console.log(`Error: ${err}`)
    }
    console.log("The new file was created succesfully! :)");
})

