let express = require('express');
let app = express();

let bodyParser = require('body-parser')
require('dotenv').config()
console.log("Hello World")
absolutePath = __dirname + '/views/index.html'
app.use(bodyParser.urlencoded({extended: false}))
publicAbsolutePath = __dirname + "/public"
app.get("/", function(req, res) {
    res.sendFile(absolutePath)
})
app.use("/public", express.static(publicAbsolutePath))
app.use(function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
app.get("/json", function(req, res) {
    if (process.env.MESSAGE_STYLE=="uppercase") {
        res.json({
            "message": "HELLO JSON"
        })
    }
    else {
        res.json({
            "message": "Hello json"
        })
    }
    
})
app.get('/now', function(req, res, next) {
    date = new Date().toString()
    req.time = date
    next()
}, function(req, res) {
    res.json({
        time: req.time
    })
})
app.get("/:word/echo", function(req, res) {
    res.json({
        echo: req.params.word
    })
})

app.route('/name')
.get(function(req, res) {
    firstName = req.query.first
    lastName = req.query.last
    res.json({
        name: `${firstName} ${lastName}`
    })
})
.post(function(req, res) {
    firstName = req.body.first
    lastName = req.body.last
    res.json({
        name: `${firstName} ${lastName}`
    })
})






























 module.exports = app;
