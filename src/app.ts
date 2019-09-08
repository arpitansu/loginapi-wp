import express from "express";
import bodyParser from 'body-parser'
import logger from 'morgan'
//connectiom to db
import "./db/mongoose"

//import route
import route from "./routes/v1.route"

const app = express();

app.use(logger('dev'))
app.use(bodyParser.json({}));

//handling cors options status
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

// the below line will take to the global route file


app.use("/", route)


export = app