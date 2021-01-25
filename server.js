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

app.use(favicon(path.join(__dirname, "public", "favicon.png")));

app.use(express.static(path.join(__dirname, "public")));

app.all("/meeting/*", function (req, res) {
    res.sendFile("index.html", { root: __dirname + "/public/" });
});

// websocket initialization
const webSocketsServerPort = 8000;
const webSocketServer = require("websocket").server;
const http = require("http");
// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
    httpServer: server,
});

const clients = {};

// This code generates unique userid for everyuser.
const getUniqueID = () => {
    const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    return s4() + s4() + "-" + s4();
};

const typesDef = {
    USER_EVENT: "userevent",
    CONTENT_CHANGE: "contentchange",
};

const sendMessage = (json) => {
    // We are sending the current data to all connected clients
    Object.keys(clients).map((client) => {
        clients[client].sendUTF(json);
    });
};

wsServer.on("request", function (request) {
    var userID = getUniqueID();
    console.log(new Date() + " Recieved a new connection from origin " + request.origin + ".");
    // You can rewrite this part of the code to accept only the requests from allowed origin
    const connection = request.accept(null, request.origin);
    clients[userID] = connection;
    console.log("connected: " + userID + " in " + Object.getOwnPropertyNames(clients));

    connection.on("message", function (message) {
        if (message.type === "utf8") {
            const dataFromClient = JSON.parse(message.utf8Data);
            const json = { timer_duration: dataFromClient.timer_duration };
            sendMessage(JSON.stringify(json));
        }
    });

    // user disconnected
    connection.on("close", function (connection) {
        console.log(new Date() + " Peer " + userID + " disconnected.");
        delete clients[userID];
    });
});

module.exports = app;
