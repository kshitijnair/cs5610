const fs = require('fs');
const express = require('express');
const logger = require('./logger.js');

const app = express();
const port = 3000;


app.get('/', (req, res)=> {
    res.send("Hello from the Node.js app! ;)");
    console.log("The user is visiting the Home page.")
})

app.get("/tasks", (req, res) => {
    res.send("<h1>To Do Tasks:</h1>\
                <ol><li>Cook Food</li><li>Pet Capibara</li><li>Get Groceries</li></ol>")
    console.log("The user is visiting the To-do list page.");
    console.log(req.params);
})

app.get("/tasks/:taskID", (req, res) => {
    res.send(`<h1>Youre visiting Task #${req.params.taskID}</h1>`);
    console.log("The user is visiting the special route to-do list page.");
    console.log(req.params);
})

app.listen(port, () => {
    console.log(`Listening from app.js from PORT ${port}`);
})

// standard dataype for text file UTF-8
const string = "Hi! This is a new file that was created from the Node.js fs module :D"

const data = new Uint8Array(Buffer.from(string));

fs.writeFile('newFile.txt', data, (err) => {
    if (err) console.log(`Error: ${err}`);
    else {
        fs.readFile('newFile.txt', (err, data) => {
            if(err) console.log(`Error: ${err}`);
            // else console.log(`This is the data from the new file: ${data}`)
        })
    }
})

// console.log(logger);
// logger.logFunction('This is a console output from the logger module.')