import express from "express";
import * as controller from "./controller"
const { check } = require('express-validator');

let router = express.Router();

router.get("/", controller.test)

export default router;
