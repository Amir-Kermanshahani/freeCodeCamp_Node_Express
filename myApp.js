let express = require('express');
let app = express();

require('dotenv').config()
console.log("Hello World")
absolutePath = __dirname + '/views/index.html'
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






























 module.exports = app;
