var path = require("path");
var express = require("express");
// static file compression middleware
var compress = require("compression");
// middleware to allow the general use of PUT and DELETE verbs
var methodOverride = require("method-override");
// requet logger middleware
var morgan = require("morgan");
// middleware to return X-Response-Time with a response
var responseTime = require("response-time");
// middleware to serve a favicon prior to all other assets/routes
var favicon = require("serve-favicon");

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(morgan("dev"));
app.use(responseTime());

app.use(methodOverride());
app.use(compress());

// app.set("views", __dirname + "/views");
// app.set("view engine", "html");

app.use(favicon(path.join(__dirname, "public", "favicon.png")));

app.use(express.static(path.join(__dirname, "public")));

// app.post("/api/call-me", function (req, res) {
//     var name = req.body.name;
//     var email = req.body.email;
//     var message = req.body.message;

//     sendEmail(email, name, message)
//         .then((r) => {
//             console.log(r);
//             res.send({ message: "success" });
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(400);
//             res.send({ error: "Error sending email" });
//         });

//     // return res.send("success");
// });

app.all("/meeting/*", function (req, res) {
    res.sendFile("index.html", { root: __dirname + "/public/" });
});

module.exports = app;
