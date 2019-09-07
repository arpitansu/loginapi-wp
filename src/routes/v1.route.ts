/**
 * this is global route file
 */

import express from "express";
import UserRoute from "../controllers/User/route"
const { check } = require('express-validator');
import * as usercontroller from "../controllers/User/controller"
const passport = require('passport');
require("../Passport/Passport")(passport)
// the line passport.authenticate('jwt', { session: false }) will be passed as middlehwere to each protected route

let router = express.Router();

//will not be protected because its login
router.post("/login", [
    check('email', 'Your email is not valid').not().isEmpty().isEmail(),
    check('password', 'Password required').not().isEmpty()
    ], 
    usercontroller.SignIn
)

//create new user
router.post("/signup",[
    check('name', 'Name Required').not().isEmpty(),
    check('email', 'Your email is not valid').not().isEmpty().isEmail(),
    check('password', 'Password required').not().isEmpty()
    ], 
    usercontroller.register
)

//mobile number login
router.post("/otp", [
    check('number', 'Number Required').not().isEmpty()
    ], usercontroller.SendOtp)

router.use("/user",passport.authenticate('jwt', { session: false }), UserRoute)

export default router;
