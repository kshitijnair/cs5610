const fs = require('fs');
const express = require('express');
const logger = require('./logger.js');

const app = express();
const port = 3000;

// Route 1
app.get('/', (req, res)=> {
    res.send("Hello from the Node.js app! ;)");
    console.log("The user is visiting the Home page.")
})

// Route 2
app.get("/tasks", (req, res) => {
    res.send("<h1>To Do Tasks:</h1>\
                <ol><li>Cook Food</li><li>Pet Capibara</li><li>Get Groceries</li></ol>")
    console.log("The user is visiting the To-do list page.");
    console.log(req.params);
})

// Route 3 - Parameter
app.get("/tasks/:taskID", (req, res) => {
    res.send(`<h1>You're visiting Task #${req.params.taskID}</h1>`);
    console.log("The user is visiting the to-do list page with a parameter.");
    console.log(req.params);
})

// Route 4 - Multiple Parameters
app.get("/tasks/:taskID/:nameID", (req, res) => {
    res.send(`<h1>You're visiting Task #${req.params.taskID} assigned to ${req.params.nameID}</h1>`);
    console.log("The user is visiting the to-do list page with multiple parameter.");
    console.log(req.params);
})

// Route 5 - Queries
app.get("/user", (req, res) => {
    for (const key in req.query) {
        console.log(key, req.query[key]);
    }
    if (!req.query.name || req.query.course) {
        res.status(400).send("Oh no, Bad Request!")
    } else {
        res.send(`User ${req.query.name} is taking the ${req.query.course} course`);
    }
    console.log("The user is visiting the multiple queries list page.");
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