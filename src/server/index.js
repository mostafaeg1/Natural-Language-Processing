var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

// API Credentials
const apiKey = process.env.API_KEY

const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve("dist/index.html"));
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log(`Example app listening on localhost: ${8081}`)
})

app.get('/getkey', function (req, res) {
    res.send(apiKey)
})
