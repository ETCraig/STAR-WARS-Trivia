require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');

const { SESSION_SECRET, CONNECTION_STRING } = process.env

app.use(bodyParser.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
});

const ctrl = require('./Controller');

const port = 3123
app.listen(port, () => { console.log(`Listening and operating on Port ${port}.`) });