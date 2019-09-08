import User from "../../db/models/User"
import SignUp from "./SignUp"
import Authentication from "./Authentication";
import OtpGen from "./Otp";
import Sms from "../../Utils/sms";
const { validationResult } = require('express-validator');

export async function register(req, res){

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({msg : "All fields required"})
      return
    }

    let signup = new SignUp(req.body)
    return signup.execute()
    .then(result => {
        res.json({msg : "User has been registered"})
    })
    .catch(e => {
        res.status(500)
        res.json({msg : "user registration failed"})
    })
    
}

export async function SignIn(req, res){

    let auth = new Authentication()
    let strategy = auth.get(req.query.type) //can implement also  local || google || fb || otp
    let isAuthentic = await strategy.authenticate(req.body)
    if(isAuthentic.token){
        res.json(isAuthentic)
        return
    }
    else{
        res.status(isAuthentic.status)
        res.json(isAuthentic)
    }

}

export async function SendOtp(req, res){
    let user =  await User.findOne({number : req.body.number})
    .then(result => result)
    .catch(err => err)
    if(user){
        let genOtp = await new OtpGen().gen(user.id)
        console.log("otp is : ", genOtp.otp)
        let sms = new Sms().send(user.number, `Hi from the api twillio Otp : ${genOtp.otp}`)
        res.json({msg : "Otp has ben sent successfully" + " OTP : " + genOtp.otp})
        return
    }

    res.status(404)
    res.json({msg : "User not found"})

}


export async function test(req, res){
    res.json({msg : "user is logged in"})
}