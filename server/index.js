require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      authCtrl = require('./controllers/authCtrl'),
      ctrl = require('./controllers/mainCtrl'),
     {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      port = SERVER_PORT;

const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectAuthorization: false}
}).then (db => {
    app.set("db", db);
    console.log("db connected")
})

//auth endpoints
app.post("/api/register", authCtrl.register)
app.post("/api/login", authCtrl.login) //"post" uses req.body
app.get("/api/logout", authCtrl.logout) // "get" used due to not needing req.body

app.listen(3333, () => console.log(`Server is listening on port ${port}`))