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
































 module.exports = app;
