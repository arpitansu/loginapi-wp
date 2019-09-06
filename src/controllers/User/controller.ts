import User from "../../db/models/User"
import SignUp from "./SignUp"
import Authentication from "./Authentication";
const { validationResult } = require('express-validator');

export async function register(req, res){

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).jsonp(errors.array())
      return
    }

    let signup = new SignUp(req.body)
    let result = await signup.execute()
    res.json(result)
}

export async function SignIn(req, res){

    let auth = new Authentication()
    let strategy = auth.get('local') // by default giving local, can implement also  //local || google || fb
    let isAuthentic = await strategy.authenticate(req.body.email, req.body.password)
    if(isAuthentic.token){
        res.json(isAuthentic)
        return
    }
    else{
        res.status(isAuthentic.status)
        res.json(isAuthentic)
    }

}


export async function test(req, res){
    res.json({msg : "user is logged in"})
}