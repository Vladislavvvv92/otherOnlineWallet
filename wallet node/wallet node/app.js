let cook;
const db = require("./public/server/bd").db;
const app = express();
const path = require('path');
const http = require("http");
const server = http.createServer(app);
const express = require("express");
const session = require('./public/server/session').session;
const bodyParser = require("body-parser");
const authQuerys = require("./public/server/authorization").authQuerys;
const verification = require('./public/server/verification').verification;
const cookieParser = require('cookie-parser');
const urlencodedParserjs = bodyParser.json();

app.use(cookieParser());
app.use('/dist', express.static(__dirname + "/dist"));
app.use('/public', express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/dist/images', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/loginPage/img'));
});

app.get('/server', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/server'));
});

server.listen(process.env.PORT || 4000, () => {
    db.connect();
    console.log(`Server started on port ${server.address().port} :)`);
});

app.post('/authorization.js', urlencodedParserjs, function (req, res) {
    authQuerys.sqlQuery(req.body, res);
});

app.post('/verification.js', urlencodedParserjs, function (req, res) {
    verification.check(req.body, res);
});

app.get('/session.js', urlencodedParserjs, function (req, res) {
    session.setSid();
    cook = session.getSid();
    res.cookie("SID", cook, { maxAge: 3000, httpOnly: true});
    res.send(true)
});

app.get('/checkSession.js', urlencodedParserjs, function (req, res) {
    if(cook === session.getSid()){
        res.cookie("SID", cook, { maxAge: 3000, httpOnly: true});
        res.send(true);
    }
});

app.get('/getUser.js', urlencodedParserjs, function (req, res) {
    authQuerys.getUser(req, res)
});