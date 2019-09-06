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
// app.options('*', cors())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, UPDATE, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type');
    next();
});

// the below line will take to the global route file


app.use("/", route)


export = app